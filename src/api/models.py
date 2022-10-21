from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    hashed_password = db.Column(db.String(500), unique=True, nullable=False)
    salt = db.Column(db.String(500), unique=True, nullable=False)
    profile_picture = db.Column(db.String(120), unique=False, nullable=True)

class Post_donation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1200), unique=False, nullable=False)
    presentation = db.Column(db.String(120), unique=False, nullable=False)
    active_component = db.Column(db.String(120), unique=False, nullable=False)
    expiration_date = db.Column(db.String(120), unique=False, nullable=False)
    specification = db.Column(db.String(120), unique=False, nullable=False)
    quantity = db.Column(db.String(120), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    medicine_picture = db.Column(db.String(120), unique=False, nullable=True)




    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }