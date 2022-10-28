"""empty message

Revision ID: 86d461d954cd
Revises: 7479cb6efcda
Create Date: 2022-10-28 04:06:18.336098

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86d461d954cd'
down_revision = '7479cb6efcda'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('description', sa.String(length=1200), nullable=True),
    sa.Column('presentation', sa.String(length=120), nullable=True),
    sa.Column('active_component', sa.String(length=120), nullable=True),
    sa.Column('expiration_date', sa.String(length=120), nullable=True),
    sa.Column('dosis', sa.String(length=120), nullable=True),
    sa.Column('quantity', sa.String(length=120), nullable=True),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('medicine_picture', sa.String(length=120), nullable=True),
    sa.Column('typeof', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('medicine_picture')
    )
    op.drop_table('post_donation')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('post_donation',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('description', sa.VARCHAR(length=1200), autoincrement=False, nullable=False),
    sa.Column('presentation', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('active_component', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('expiration_date', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('specification', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('quantity', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('medicine_picture', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='post_donation_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='post_donation_pkey')
    )
    op.drop_table('post')
    # ### end Alembic commands ###
