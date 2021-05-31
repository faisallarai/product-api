# GET

GET /api/v1/products

# Filtering

GET /api/v1/products?returnable=false
GET /api/v1/products?returnable=true

GET /api/v1/products?productType=Goods
GET /api/v1/products?productType=Services

GET /api/v1/products?productType=Goods&returnable=true
GET /api/v1/products?productType=Goods&returnable=false

GET /api/v1/products?productType=Services&returnable=true
GET /api/v1/products?productType=Services&returnable=false

# Pagination

GET /api/v1/products?page=0
GET /api/v1/products?page=0&size=1

# GET BY KEY

GET /api/v1/products/920d76c3-260e-4ff1-a427-08f2dadd7478

# POST

POST /api/v1/products

Body
{
"img": "",
"sku": "",
"name": "Gino 1.1kg",
"unit": "Nos",
"returnable": false,
"productType": "Goods",
"sellingPrice": 97,
"sellingAccount": "Sales",
"sellingDescription": "",
"sellingTax": "VAT",
"costPrice": 95,
"costAccount": "Cost of Goods Sold",
"costDescription": "",
"costTax": "VAT",
"trackable": false,
"inventoryAccount": "Inventory Asset",
"openingStock": 0,
"reorderPoint": 0,
"preferredVendor": "Conserveria Dist. Gh.",
"weight": 1.1,
"quantity": 500,
"manufacturer": "",
"brandId": "34e863b1-a352-402b-892b-3da90cc27163",
"code": "",
"productDate": "16 Apr 2021"
}

# PUT

PUT /api/v1/products/920d76c3-260e-4ff1-a427-08f2dadd7478

Body
{
"img": "",
"sku": "",
"name": "Gino 1.1kg",
"unit": "Nos",
"returnable": false,
"productType": "Goods",
"sellingPrice": 97,
"sellingAccount": "Sales",
"sellingDescription": "",
"sellingTax": "VAT",
"costPrice": 95,
"costAccount": "Cost of Goods Sold",
"costDescription": "",
"costTax": "VAT",
"trackable": false,
"inventoryAccount": "Inventory Asset",
"openingStock": 0,
"reorderPoint": 0,
"preferredVendor": "Conserveria Dist. Gh.",
"weight": 1.1,
"quantity": 500,
"manufacturer": "",
"brandId": "34e863b1-a352-402b-892b-3da90cc27163",
"code": "",
"productDate": "16 Apr 2021"
}

# PATCH

PUT /api/v1/products/920d76c3-260e-4ff1-a427-08f2dadd7478

Body
{
"img": "",
"sku": "",
"name": "Gino 1.1kg",
"unit": "Nos",
"returnable": false,
"productType": "Goods",
"sellingPrice": 97,
"sellingAccount": "Sales",
"sellingDescription": "",
"sellingTax": "VAT",
"costPrice": 95,
"costAccount": "Cost of Goods Sold",
"costDescription": "",
"costTax": "VAT",
"trackable": false,
"inventoryAccount": "Inventory Asset",
"openingStock": 0,
"reorderPoint": 0,
"preferredVendor": "Conserveria Dist. Gh.",
"weight": 1.1,
"quantity": 500,
"manufacturer": "",
"brandId": "34e863b1-a352-402b-892b-3da90cc27163",
"code": "",
"productDate": "16 Apr 2021"
}
