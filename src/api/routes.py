"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import bcrypt


api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def log_user():
    body = request.json
    user = User.query.filter_by(email = body["email"]).one_or_none()
    if user is None:
        return jsonify({
            "msg": "Email or password invalid"
        }), 400

    valid_password = check_password_hash(user.password, f'{body["password"]}{user.salt}') #esto debería ser user.hashed_password en vez de user.password
    if not valid_password:
        return jsonify({
            "msg": "Email or password invalid"
        }), 400

    access_token = create_access_token(identity=user.id)
    response_body = {
        "id": user.id,
        "name": user.name,
        "token": access_token
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])

def make_user():
    if request.method == "POST":
        body = request.json
        user = User.query.filter_by(email = body["email"]).one_or_none()
        if user:
            return jsonify({
                "msg": "Email already in use"
            }), 400
        salt = bcrypt.gensalt().decode()
        hashed_password = generate_password_hash(f"{body['password']}{salt}")

        new_user = User(
            email=body['email'], 
            hashed_password=hashed_password, 
            salt=salt,
            name=body['name'], 
            last_name=body['last_name'], 
            city=body['city'], 
            profile_picture=body.get('profile_picture')
        )
        print(new_user.serialize())
        db.session.add(new_user)
        try:
            db.session.commit()
        except:
            db.session.rollback()
        return jsonify(new_user.serialize()),201

# Backend 03 Como visitante quiero poder acceder a la información de busqueda para encontrar lo que necesita
# consultar si el medicamento existe
# filtrar el medicamento por fecha de vencimiento, cantidad, presentación, ciudad. etc.
@api.route('/posts', methods=['GET'])
def posts():
    if request.method == "GET":
        
        result = db.session.query(Post).filter(
            Post.name == request.args.get('name'),
            Post.expiration_date == request.args.get('expiration_date'),
            Post.typeof == request.args.get('typeof'),
            Post.presentation == request.args.get('presentation'),
            Post.quantity == request.args.get('quantity'),
            ).all()
        print(request.args.get('name'))
        print(result)
        if result:
            return jsonify({
            "msg":"here is the list of posts",
            "list":[post.serialize() for post in result]
        }), 200
        else:
            return jsonify({
                "msg":"no posts found"
            }), 404

