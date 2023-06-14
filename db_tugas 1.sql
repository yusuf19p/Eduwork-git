CREATE TABLE users (
   user_id int primary key,
   name varchar(255),
   email varchar(255),
   phone varchar(255),
   gender varchar(255),
   address varchar(255)
);

insert into users values (1, "Budi", "Budi@gmail.com", "089630603600", "Laki-laki", "Bandung");
insert into users values (2, "Siti", "Siti@gmail.com", "089630603601", "Perempuan", "Jakarta");
insert into users values (3, "Tri", "Tri@gmail.com", "089630603602", "Laki-laki", "Bekasi");
insert into users values (4, "Rina", "Rina@gmail.com", "089630603603", "Perempuan", "Bandung");
insert into users values (5, "Slamet", "Slamet@gmail.com", "089630603604", "Laki-laki", "Jakarta");
insert into users values (6, "Agus", "Agus@gmail.com", "089630603605", "Laki-laki", "Bekasi");

insert into users values (7, "Budi", "Budi@gmail.com", "089630603600", "Laki-laki", "Bandung");
insert into users values (8, "Siti", "Siti@gmail.com", "089630603601", "Perempuan", "Jakarta");
insert into users values (9, "Tri", "Tri@gmail.com", "089630603602", "Laki-laki", "Bekasi");
insert into users values (10, "Rina", "Rina@gmail.com", "089630603603", "Perempuan", "Bandung");
insert into users values (11, "Slamet", "Slamet@gmail.com", "089630603604", "Laki-laki", "Jakarta");
insert into users values (12, "Agus", "Agus@gmail.com", "089630603605", "Laki-laki", "Bekasi");

insert into users values (13, "Budi", "Budi@gmail.com", "089630603600", "Laki-laki", "Bandung");
insert into users values (14, "Siti", "Siti@gmail.com", "089630603601", "Perempuan", "Jakarta");
insert into users values (15, "Tri", "Tri@gmail.com", "089630603602", "Laki-laki", "Bekasi");
insert into users values (16, "Rina", "Rina@gmail.com", "089630603603", "Perempuan", "Bandung");
insert into users values (17, "Slamet", "Slamet@gmail.com", "089630603604", "Laki-laki", "Jakarta");
insert into users values (18, "Agus", "Agus@gmail.com", "089630603605", "Laki-laki", "Bekasi");

insert into users values (19, "Budi", "Budi@gmail.com", "089630603600", "Laki-laki", "Bandung");
insert into users values (20, "Siti", "Siti@gmail.com", "089630603601", "Perempuan", "Jakarta");
insert into users values (21, "Tri", "Tri@gmail.com", "089630603602", "Laki-laki", "Bekasi");
insert into users values (22, "Rina", "Rina@gmail.com", "089630603603", "Perempuan", "Bandung");
insert into users values (23, "Slamet", "Slamet@gmail.com", "089630603604", "Laki-laki", "Jakarta");
insert into users values (24, "Agus", "Agus@gmail.com", "089630603605", "Laki-laki", "Bekasi");

insert into users values (25, "Budi", "Budi@gmail.com", "089630603600", "Laki-laki", "Bandung");
insert into users values (26, "Siti", "Siti@gmail.com", "089630603601", "Perempuan", "Jakarta");
insert into users values (27, "Tri", "Tri@gmail.com", "089630603602", "Laki-laki", "Bekasi");
insert into users values (28, "Rina", "Rina@gmail.com", "089630603603", "Perempuan", "Bandung");
insert into users values (29, "Slamet", "Slamet@gmail.com", "089630603604", "Laki-laki", "Jakarta");
insert into users values (30, "Agus", "Agus@gmail.com", "089630603605", "Laki-laki", "Bekasi");

select u.name, u.phone, u.address
from users u;
