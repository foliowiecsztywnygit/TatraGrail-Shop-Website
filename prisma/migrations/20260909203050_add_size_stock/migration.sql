-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "checkoutMode" TEXT NOT NULL DEFAULT 'standard',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "companyName" TEXT,
    "nip" TEXT,
    "subtotal" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "shipping" REAL NOT NULL,
    "total" REAL NOT NULL,
    "paymentProvider" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "fulfillmentStatus" TEXT NOT NULL DEFAULT 'processing',
    "stripeSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "deliveryMethod" TEXT NOT NULL DEFAULT 'courier',
    "inpostPointId" TEXT,
    "inpostPointName" TEXT,
    "inpostPointAddress" TEXT,
    "inpostPointCity" TEXT,
    "inpostPointPostalCode" TEXT,
    "shipmentId" TEXT,
    "trackingNumber" TEXT,
    "shipmentStatus" TEXT,
    "labelUrl" TEXT,
    "courierCompany" TEXT NOT NULL DEFAULT 'inpost',
    "packageWeight" REAL,
    "packageLength" REAL,
    "packageWidth" REAL,
    "packageHeight" REAL,
    "goodsValue" REAL,
    "orderNotes" TEXT,
    "adminNotes" TEXT,
    "needsAttention" BOOLEAN NOT NULL DEFAULT false,
    "trackingToken" TEXT NOT NULL,
    "appliedCode" TEXT,
    "partnerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "variantId" TEXT,
    "size" TEXT,
    "quantity" INTEGER NOT NULL,
    "unitPrice" REAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'PLN',
    "image" TEXT,
    "productName" TEXT NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PromoCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "expiration" DATETIME,
    "usageLimit" INTEGER,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "productScope" TEXT,
    "collectionScope" TEXT,
    "minimumCartValue" REAL,
    "partnerId" TEXT
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT,
    "name" TEXT NOT NULL,
    "nameEn" TEXT,
    "slug" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "categoryLabel" TEXT,
    "categoryLabelEn" TEXT,
    "shortDescription" TEXT NOT NULL,
    "shortDescriptionEn" TEXT,
    "description" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "material" TEXT,
    "materialEn" TEXT,
    "details" TEXT,
    "detailsEn" TEXT,
    "price" REAL NOT NULL,
    "salePrice" REAL,
    "currency" TEXT NOT NULL DEFAULT 'PLN',
    "vatRate" REAL NOT NULL DEFAULT 23,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "weight" REAL,
    "width" REAL,
    "height" REAL,
    "depth" REAL,
    "status" TEXT NOT NULL DEFAULT 'available',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" DATETIME,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "dropFeatured" BOOLEAN NOT NULL DEFAULT false,
    "colors" TEXT,
    "sizes" TEXT,
    "sizeStock" TEXT,
    "seoTitle" TEXT,
    "metaDescription" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "isThumbnail" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "snapshot" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProductHistory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CmsPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "seoTitle" TEXT,
    "metaDescription" TEXT,
    "bodyHtml" TEXT NOT NULL,
    "customData" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "currentVersion" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CmsPageVersion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pageId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "seoTitle" TEXT,
    "metaDescription" TEXT,
    "bodyHtml" TEXT NOT NULL,
    "customData" TEXT,
    "author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CmsPageVersion_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "CmsPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ReturnRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderNumber" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "details" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripeSessionId_key" ON "Order"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripePaymentIntentId_key" ON "Order"("stripePaymentIntentId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_trackingToken_key" ON "Order"("trackingToken");

-- CreateIndex
CREATE UNIQUE INDEX "PromoCode_code_key" ON "PromoCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Product_externalId_key" ON "Product"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "CmsPage_key_key" ON "CmsPage"("key");

-- CreateIndex
CREATE UNIQUE INDEX "CmsPage_slug_key" ON "CmsPage"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CmsPageVersion_pageId_version_key" ON "CmsPageVersion"("pageId", "version");
