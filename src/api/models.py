from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(400), unique=True, nullable=False)
    name = db.Column(db.String(400), unique=False, nullable=False)
    last_name = db.Column(db.String(400), unique=False, nullable=False)
    city = db.Column(db.String(400), unique=False, nullable=False)
    hashed_password = db.Column(db.String(400), unique=True, nullable=False)
    salt = db.Column(db.String(400), unique=True, nullable=False)
    phone = db.Column(db.String(400), unique=False)
    profile_picture = db.Column(db.String(400), unique=False, nullable=True)
    created_at = db.Column(db.DateTime(), default=datetime.now())
    posts = db.relationship("Post", back_populates="users")
    trading_posts = db.relationship("TradingPost", back_populates="users")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "hashed_password": self.hashed_password,
            "salt": self.salt
            # do not serialize the password, its a security breach
        }
    def serialize_post(self):
        return {
            "city": self.city,
            "name": self.name,
            "profile_picture": self.profile_picture,
            "phone": self.phone
            # do not serialize the password, its a security breach
        }

# class Chat(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     description = db.Column(db.String(1200), unique=False, nullable=True)


class Post(db.Model):
    #add type of post
    #change the nullable state to true or false depending if it is common or not
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True) #titulo del post
    description = db.Column(db.String(1200), unique=False, nullable=True) # descripción de cada post
    presentation = db.Column(db.String(120), unique=False, nullable=True) # presentación significa si es tableta, capsula, jarabe, inyección, etc
    active_component = db.Column(db.String(120), unique=False, nullable=True) # componente activo
    expiration_date = db.Column(db.String(120), unique=False, nullable=True) # fecha de vencimiento
    dosis = db.Column(db.String(120), unique=False, nullable=True) # la cantidad de principio activo de un medicamento
    quantity = db.Column(db.String(120), unique=False, nullable=True) # número de unidades que trae el envace o como vergas venga
    name = db.Column(db.String(120), unique=False, nullable=True) # ps el nombre
    medicine_picture = db.Column(db.String(500), unique=False, nullable=True) # foto o imagen del medicamento
    typeof = db.Column(db.String(120), unique=False, nullable=True) # especificación del tipo
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True) # la cedula del usuario
    users = db.relationship("User", back_populates="posts")

    @classmethod
    def create_donation(cls, body):
        try:
            if body.get("name") is None:
                raise Exception ({
                    "msg": "Your name can't be empty",
                    "status": 400
                })
            if body.get("description") is None:
                raise Exception ({
                    "msg": "Your description can't be empty",
                    "status": 400
                })
            if body.get("presentation") is None:
                raise Exception ({
                    "msg": "Your presentation can't be empty",
                    "status": 400
                })
            if body.get("active_component") is None:
                raise Exception ({
                    "msg": "Your active_component can't be empty",
                    "status": 400
                })
            if body.get("expiration_date") is None:
                raise Exception ({
                    "msg": "Your expiration_date can't be empty",
                    "status": 400
                })
            if body.get("quantity") is None:
                raise Exception ({
                    "msg": "Your quantity can't be empty",
                    "status": 400
                }) 

            
            new_post = cls(title= body["name"] + " (" + body["presentation"] + ", " + body["dosis"]+")" ,name = body.get("name"), description = body.get("description"), presentation = body["presentation"], active_component = body["active_component"], expiration_date = body["expiration_date"], quantity = body["quantity"], typeof = "Donation", medicine_picture = body.get("medicine_picture"), user_id = body["user_id"], dosis = body["dosis"])

            if not isinstance(new_post, cls):
                raise Exception ({
                    "msg": "Server Error",
                    "status": 500
                })
            
            save_instance = new_post.save_and_commit()

            if save_instance is False:
                raise Exception ({
                    "msg": "Server Error",
                    "status": 500
                })

            return new_post
            
        except Exception as error: 
            return ({
                "msg": "Error (" + error.args[0]["msg"] + ")",
                "status": error.args[0]["status"]
            })
    
    def serializedonations(self):
        return {
            "id": self.id,
            "title": self.title,
            "name": self.name,
            "description": self.description,
            "presentation": self.presentation,
            "active_component": self.active_component,
            "expiration_date": self.expiration_date,
            "quantity": self.quantity,
            "medicine_picture": self.medicine_picture,
            "typeof": self.typeof,
            "user_id":self.user_id,
            "user_info": self.users.serialize_post()
            
        }

    @classmethod
    def create_request(cls, body):
        try:
            if body.get("name") is None:
                raise Exception ({
                    "msg": "Your name can't be empty",
                    "status": 400
                })
            if body.get("description") is None:
                raise Exception ({
                    "msg": "Your description can't be empty",
                    "status": 400
                })
            if body.get("presentation") is None:
                raise Exception ({
                    "msg": "Your presentation can't be empty",
                    "status": 400
                })
            if body.get("active_component") is None:
                raise Exception ({
                    "msg": "Your active_component can't be empty",
                    "status": 400
                })
            if body.get("expiration_date") is None:
                raise Exception ({
                    "msg": "Your expiration_date can't be empty",
                    "status": 400
                })
            if body.get("quantity") is None:
                raise Exception ({
                    "msg": "Your quantity can't be empty",
                    "status": 400
                }) 

            
            new_request = cls(name = body.get("name"), description = body.get("description"), presentation = body["presentation"], active_component = body["active_component"], expiration_date = body["expiration_date"], quantity = body["quantity"], typeof = "Request", medicine_picture = body.get("medicine_picture"), user_id = body["user_id"], dosis = body["dosis"])

            if not isinstance(new_request, cls):
                raise Exception ({
                    "msg": "Server Error",
                    "status": 500
                })
            
            save_instance = new_request.save_and_commit()

            if save_instance is False:
                raise Exception ({
                    "msg": "Server Error",
                    "status": 500
                })

            return new_request
            
        except Exception as error: 
            return ({
                "msg": "Error (" + error.args[0]["msg"] + ")",
                "status": error.args[0]["status"]
            })
    
    def serializerequest(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "presentation": self.presentation,
            "active_component": self.active_component,
            "expiration_date": self.expiration_date,
            "quantity": self.quantity,
            "medicine_picture": self.medicine_picture,
            "typeof": self.typeof,
            "user_id": self.user_id,
            "user_info": self.users.serialize_post()
            
        }

    def save_and_commit(self):
        try:
            db.session.add(self) 
            db.session.commit()
            return True
        except Exception as error:
            db.session.rollback()
            return False

class TradingPost(db.Model):
    #add type of post
    #change the nullable state to true or false depending if it is common or not
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True) #titulo del post
    description = db.Column(db.String(1200), unique=False, nullable=True) # descripción de cada post
    presentation = db.Column(db.String(120), unique=False, nullable=True) # presentación significa si es tableta, capsula, jarabe, inyección, etc
    active_component = db.Column(db.String(120), unique=False, nullable=True) # componente activo
    expiration_date = db.Column(db.String(120), unique=False, nullable=True) # fecha de vencimiento
    dosis = db.Column(db.String(120), unique=False, nullable=True) # la cantidad de principio activo de un medicamento
    quantity = db.Column(db.String(120), unique=False, nullable=True) # número de unidades que trae el envace o como vergas venga
    name = db.Column(db.String(120), unique=False, nullable=True) # ps el nombre
    medicine_picture = db.Column(db.String(120), unique=True, nullable=True) # foto o imagen del medicamento (solicitado)
    req_presentation = db.Column(db.String(120), unique=False, nullable=True) # presentación significa si es tableta, capsula, jarabe, inyección, etc (solicitado)
    req_active_component = db.Column(db.String(120), unique=False, nullable=True) # componente activo (solicitado)
    req_expiration_date = db.Column(db.String(120), unique=False, nullable=True) # fecha de vencimiento (solicitado)
    req_dosis = db.Column(db.String(120), unique=False, nullable=True) # la cantidad de principio activo de un medicamento (solicitado)
    req_quantity = db.Column(db.String(120), unique=False, nullable=True) # número de unidades que trae el envace o como vergas venga (solicitado)
    req_name = db.Column(db.String(120), unique=False, nullable=True) # ps el nombre (solicitado)
    req_medicine_picture = db.Column(db.String(120), unique=True, nullable=True) # foto o imagen del medicamento (solicitado)
    typeof = db.Column(db.String(120), unique=False, nullable=True) # especificación del tipo ("trade")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True) # relacion con el usuario
    users = db.relationship("User", back_populates="trading_posts")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "req_name": self.req_name,
        }

    def save_and_commit(self):
        try:
            db.session.add(self) 
            db.session.commit()
            return True
        except Exception as error:
            db.session.rollback()
            return False