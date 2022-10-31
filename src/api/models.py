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
    medicine_picture = db.Column(db.String(120), unique=True, nullable=True) # foto o imagen del medicamento
    typeof = db.Column(db.String(120), unique=False, nullable=True) # especificación del tipo
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True) # relacion con el usuario
    users = db.relationship("User", back_populates="posts")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

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
            "req_name": self.req_name
        }