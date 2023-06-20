CREATE TABLE Users (
	user_id INT Primary Key,
	email VARCHAR(255),
	name VARCHAR(255),
	password VARCHAR(255),
	address VARCHAR(255),
	role VARCHAR(255),
	status VARCHAR(255),
	created_at TIMESTAMP,
	Updated_at TIMESTAMP
);

CREATE TABLE Categories (
	category_id INT PRIMARY KEY,
	user_id INT,
	code VARCHAR(255),
	name VARCHAR(255),
	slug VARCHAR(255),
	description TEXT,
	status VARCHAR(255),
	photo VARCHAR(255),

	CONSTRAINT user_id FOREIGN KEY (user_id)
	REFERENCES Users(user_id)
);

CREATE TABLE Products (
	product_id INT PRIMARY KEY,
	category_id INT,
	user_id INT,
	code VARCHAR(255),
	name VARCHAR(255),
	slug VARCHAR(255),
	description TEXT,
	photo VARCHAR(255),
	qty NUMERIC,
	unit VARCHAR(255),
	price NUMERIC,
	status VARCHAR(255),

	CONSTRAINT F_user_id FOREIGN KEY (user_id)
	REFERENCES Users(user_id),

	CONSTRAINT FK_category_id FOREIGN KEY (category_id)
	REFERENCES Categories(category_id)
);

INSERT INTO Users (user_id,email,name,password,address,role,status,created_at,Updated_at)
VALUES
  (1, 'Budi@gmail.com', 'Budi', 'Budi123', 'Bekasi', 'User', 'Inactive',  DEFAULT, DEFAULT),
  (2, 'Siti@gmail.com', 'Siti', 'Siti456', 'Jakarta', 'Admin', 'Active',  DEFAULT, DEFAULT),
  (3, 'Tri@gmail.com', 'Tri', 'Tri789', 'Bandung', 'User', 'Inactive',  DEFAULT, DEFAULT),
  (4, 'Rina@gmail.com', 'Rina', 'Rina1011', 'Bekasi', 'Admin', 'Active',  DEFAULT, DEFAULT),
  (5, 'Slamet@gmail.com', 'Slamet', 'Slamet1213', 'Jakarta', 'User', 'Inactive',  DEFAULT, DEFAULT),
  (6, 'Agus@gmail.com', 'Agus', 'Agus1415', 'Bandung', 'Admin', 'Active',  DEFAULT, DEFAULT);
  
INSERT INTO Categories (category_id,user_id,code,name,slug,description,status,photo)
VALUES 
  (01, 1, 'C01', 'Category A', 'category-a', 'Description of Category A', 'Active', 'photo1.jpg'),
  (02, 1, 'C02', 'Category B', 'category-b', 'Description of Category B', 'Active', 'photo2.jpg'),
  (03, 2, 'C03', 'Category C', 'category-c', 'Description of Category C', 'Active', 'photo3.jpg'),
  (04, 2, 'C04', 'Category D', 'category-d', 'Description of Category D', 'Active', 'photo4.jpg'),
  (05, 3, 'C05', 'Category E', 'category-e', 'Description of Category E', 'Active', 'photo5.jpg'),
  (06, 3, 'C06', 'Category F', 'category-f', 'Description of Category F', 'Active', 'photo6.jpg');

INSERT INTO Products (product_id,category_id,user_id,code,name,slug,description,photo,qty,unit,price,status)
VALUES
  (101, 01, 1, 'P101', 'Product A', 'product-a', 'Description of Product A', 'photo1.jpg', 23, 'pcs', 50, 'Active'),
  (102, 02, 1, 'P102', 'Product B', 'product-b', 'Description of Product B', 'photo2.jpg', 34, 'pcs', 61, 'Active'),
  (103, 03, 2, 'P103', 'Product C', 'product-c', 'Description of Product C', 'photo3.jpg', 67, 'pcs', 75, 'Active'),
  (104, 04, 2, 'P104', 'Product D', 'product-d', 'Description of Product D', 'photo4.jpg', 98, 'pcs', 12, 'Active'),
  (105, 05, 3, 'P105', 'Product E', 'product-e', 'Description of Product E', 'photo5.jpg', 2, 'pcs', 8, 'Active'),
  (106, 06, 3, 'P106', 'Product F', 'product-f', 'Description of Product F', 'photo6.jpg', 8, 'pcs', 15, 'Active');

SELECT u.user_id, u.email, u.name, c.name, c.code, p.name, p.code
FROM Users u
LEFT JOIN Categories c ON c.user_id = u.user_id
LEFT JOIN Products p ON p.category_id = c.category_id;
 
