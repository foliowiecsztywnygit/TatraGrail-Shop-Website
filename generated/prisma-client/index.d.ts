
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model PromoCode
 * 
 */
export type PromoCode = $Result.DefaultSelection<Prisma.$PromoCodePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductHistory
 * 
 */
export type ProductHistory = $Result.DefaultSelection<Prisma.$ProductHistoryPayload>
/**
 * Model CmsPage
 * 
 */
export type CmsPage = $Result.DefaultSelection<Prisma.$CmsPagePayload>
/**
 * Model CmsPageVersion
 * 
 */
export type CmsPageVersion = $Result.DefaultSelection<Prisma.$CmsPageVersionPayload>
/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model ReturnRequest
 * 
 */
export type ReturnRequest = $Result.DefaultSelection<Prisma.$ReturnRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promoCode`: Exposes CRUD operations for the **PromoCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromoCodes
    * const promoCodes = await prisma.promoCode.findMany()
    * ```
    */
  get promoCode(): Prisma.PromoCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productHistory`: Exposes CRUD operations for the **ProductHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductHistories
    * const productHistories = await prisma.productHistory.findMany()
    * ```
    */
  get productHistory(): Prisma.ProductHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPage`: Exposes CRUD operations for the **CmsPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPages
    * const cmsPages = await prisma.cmsPage.findMany()
    * ```
    */
  get cmsPage(): Prisma.CmsPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPageVersion`: Exposes CRUD operations for the **CmsPageVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPageVersions
    * const cmsPageVersions = await prisma.cmsPageVersion.findMany()
    * ```
    */
  get cmsPageVersion(): Prisma.CmsPageVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.returnRequest`: Exposes CRUD operations for the **ReturnRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnRequests
    * const returnRequests = await prisma.returnRequest.findMany()
    * ```
    */
  get returnRequest(): Prisma.ReturnRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    OrderItem: 'OrderItem',
    PromoCode: 'PromoCode',
    Product: 'Product',
    ProductImage: 'ProductImage',
    ProductHistory: 'ProductHistory',
    CmsPage: 'CmsPage',
    CmsPageVersion: 'CmsPageVersion',
    ContactSubmission: 'ContactSubmission',
    ReturnRequest: 'ReturnRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "orderItem" | "promoCode" | "product" | "productImage" | "productHistory" | "cmsPage" | "cmsPageVersion" | "contactSubmission" | "returnRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      PromoCode: {
        payload: Prisma.$PromoCodePayload<ExtArgs>
        fields: Prisma.PromoCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findFirst: {
            args: Prisma.PromoCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findMany: {
            args: Prisma.PromoCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          create: {
            args: Prisma.PromoCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          createMany: {
            args: Prisma.PromoCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          delete: {
            args: Prisma.PromoCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          update: {
            args: Prisma.PromoCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          deleteMany: {
            args: Prisma.PromoCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          upsert: {
            args: Prisma.PromoCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          aggregate: {
            args: Prisma.PromoCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromoCode>
          }
          groupBy: {
            args: Prisma.PromoCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductHistory: {
        payload: Prisma.$ProductHistoryPayload<ExtArgs>
        fields: Prisma.ProductHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProductHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          findMany: {
            args: Prisma.ProductHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>[]
          }
          create: {
            args: Prisma.ProductHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          createMany: {
            args: Prisma.ProductHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>[]
          }
          delete: {
            args: Prisma.ProductHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          update: {
            args: Prisma.ProductHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProductHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductHistory>
          }
          groupBy: {
            args: Prisma.ProductHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductHistoryCountAggregateOutputType> | number
          }
        }
      }
      CmsPage: {
        payload: Prisma.$CmsPagePayload<ExtArgs>
        fields: Prisma.CmsPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findFirst: {
            args: Prisma.CmsPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findMany: {
            args: Prisma.CmsPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          create: {
            args: Prisma.CmsPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          createMany: {
            args: Prisma.CmsPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          delete: {
            args: Prisma.CmsPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          update: {
            args: Prisma.CmsPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          deleteMany: {
            args: Prisma.CmsPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          upsert: {
            args: Prisma.CmsPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          aggregate: {
            args: Prisma.CmsPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPage>
          }
          groupBy: {
            args: Prisma.CmsPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPageCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPageCountAggregateOutputType> | number
          }
        }
      }
      CmsPageVersion: {
        payload: Prisma.$CmsPageVersionPayload<ExtArgs>
        fields: Prisma.CmsPageVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPageVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPageVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          findFirst: {
            args: Prisma.CmsPageVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPageVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          findMany: {
            args: Prisma.CmsPageVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>[]
          }
          create: {
            args: Prisma.CmsPageVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          createMany: {
            args: Prisma.CmsPageVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPageVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>[]
          }
          delete: {
            args: Prisma.CmsPageVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          update: {
            args: Prisma.CmsPageVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          deleteMany: {
            args: Prisma.CmsPageVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPageVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPageVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>[]
          }
          upsert: {
            args: Prisma.CmsPageVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPageVersionPayload>
          }
          aggregate: {
            args: Prisma.CmsPageVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPageVersion>
          }
          groupBy: {
            args: Prisma.CmsPageVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPageVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPageVersionCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPageVersionCountAggregateOutputType> | number
          }
        }
      }
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ReturnRequest: {
        payload: Prisma.$ReturnRequestPayload<ExtArgs>
        fields: Prisma.ReturnRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          findFirst: {
            args: Prisma.ReturnRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          findMany: {
            args: Prisma.ReturnRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>[]
          }
          create: {
            args: Prisma.ReturnRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          createMany: {
            args: Prisma.ReturnRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>[]
          }
          delete: {
            args: Prisma.ReturnRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          update: {
            args: Prisma.ReturnRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          deleteMany: {
            args: Prisma.ReturnRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReturnRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>[]
          }
          upsert: {
            args: Prisma.ReturnRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRequestPayload>
          }
          aggregate: {
            args: Prisma.ReturnRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnRequest>
          }
          groupBy: {
            args: Prisma.ReturnRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    orderItem?: OrderItemOmit
    promoCode?: PromoCodeOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    productHistory?: ProductHistoryOmit
    cmsPage?: CmsPageOmit
    cmsPageVersion?: CmsPageVersionOmit
    contactSubmission?: ContactSubmissionOmit
    returnRequest?: ReturnRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    history: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    history?: boolean | ProductCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductHistoryWhereInput
  }


  /**
   * Count Type CmsPageCountOutputType
   */

  export type CmsPageCountOutputType = {
    versions: number
  }

  export type CmsPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | CmsPageCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * CmsPageCountOutputType without action
   */
  export type CmsPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageCountOutputType
     */
    select?: CmsPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsPageCountOutputType without action
   */
  export type CmsPageCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPageVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: number | null
    discount: number | null
    shipping: number | null
    total: number | null
    packageWeight: number | null
    packageLength: number | null
    packageWidth: number | null
    packageHeight: number | null
    goodsValue: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: number | null
    discount: number | null
    shipping: number | null
    total: number | null
    packageWeight: number | null
    packageLength: number | null
    packageWidth: number | null
    packageHeight: number | null
    goodsValue: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    email: string | null
    phone: string | null
    checkoutMode: string | null
    firstName: string | null
    lastName: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    street: string | null
    houseNumber: string | null
    companyName: string | null
    nip: string | null
    subtotal: number | null
    discount: number | null
    shipping: number | null
    total: number | null
    paymentProvider: string | null
    paymentStatus: string | null
    fulfillmentStatus: string | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    deliveryMethod: string | null
    inpostPointId: string | null
    inpostPointName: string | null
    inpostPointAddress: string | null
    inpostPointCity: string | null
    inpostPointPostalCode: string | null
    shipmentId: string | null
    trackingNumber: string | null
    shipmentStatus: string | null
    labelUrl: string | null
    courierCompany: string | null
    packageWeight: number | null
    packageLength: number | null
    packageWidth: number | null
    packageHeight: number | null
    goodsValue: number | null
    orderNotes: string | null
    adminNotes: string | null
    needsAttention: boolean | null
    trackingToken: string | null
    appliedCode: string | null
    partnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    email: string | null
    phone: string | null
    checkoutMode: string | null
    firstName: string | null
    lastName: string | null
    country: string | null
    city: string | null
    postalCode: string | null
    street: string | null
    houseNumber: string | null
    companyName: string | null
    nip: string | null
    subtotal: number | null
    discount: number | null
    shipping: number | null
    total: number | null
    paymentProvider: string | null
    paymentStatus: string | null
    fulfillmentStatus: string | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    deliveryMethod: string | null
    inpostPointId: string | null
    inpostPointName: string | null
    inpostPointAddress: string | null
    inpostPointCity: string | null
    inpostPointPostalCode: string | null
    shipmentId: string | null
    trackingNumber: string | null
    shipmentStatus: string | null
    labelUrl: string | null
    courierCompany: string | null
    packageWeight: number | null
    packageLength: number | null
    packageWidth: number | null
    packageHeight: number | null
    goodsValue: number | null
    orderNotes: string | null
    adminNotes: string | null
    needsAttention: boolean | null
    trackingToken: string | null
    appliedCode: string | null
    partnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    email: number
    phone: number
    checkoutMode: number
    firstName: number
    lastName: number
    country: number
    city: number
    postalCode: number
    street: number
    houseNumber: number
    companyName: number
    nip: number
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider: number
    paymentStatus: number
    fulfillmentStatus: number
    stripeSessionId: number
    stripePaymentIntentId: number
    deliveryMethod: number
    inpostPointId: number
    inpostPointName: number
    inpostPointAddress: number
    inpostPointCity: number
    inpostPointPostalCode: number
    shipmentId: number
    trackingNumber: number
    shipmentStatus: number
    labelUrl: number
    courierCompany: number
    packageWeight: number
    packageLength: number
    packageWidth: number
    packageHeight: number
    goodsValue: number
    orderNotes: number
    adminNotes: number
    needsAttention: number
    trackingToken: number
    appliedCode: number
    partnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    discount?: true
    shipping?: true
    total?: true
    packageWeight?: true
    packageLength?: true
    packageWidth?: true
    packageHeight?: true
    goodsValue?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    discount?: true
    shipping?: true
    total?: true
    packageWeight?: true
    packageLength?: true
    packageWidth?: true
    packageHeight?: true
    goodsValue?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    email?: true
    phone?: true
    checkoutMode?: true
    firstName?: true
    lastName?: true
    country?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    companyName?: true
    nip?: true
    subtotal?: true
    discount?: true
    shipping?: true
    total?: true
    paymentProvider?: true
    paymentStatus?: true
    fulfillmentStatus?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    deliveryMethod?: true
    inpostPointId?: true
    inpostPointName?: true
    inpostPointAddress?: true
    inpostPointCity?: true
    inpostPointPostalCode?: true
    shipmentId?: true
    trackingNumber?: true
    shipmentStatus?: true
    labelUrl?: true
    courierCompany?: true
    packageWeight?: true
    packageLength?: true
    packageWidth?: true
    packageHeight?: true
    goodsValue?: true
    orderNotes?: true
    adminNotes?: true
    needsAttention?: true
    trackingToken?: true
    appliedCode?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    email?: true
    phone?: true
    checkoutMode?: true
    firstName?: true
    lastName?: true
    country?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    companyName?: true
    nip?: true
    subtotal?: true
    discount?: true
    shipping?: true
    total?: true
    paymentProvider?: true
    paymentStatus?: true
    fulfillmentStatus?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    deliveryMethod?: true
    inpostPointId?: true
    inpostPointName?: true
    inpostPointAddress?: true
    inpostPointCity?: true
    inpostPointPostalCode?: true
    shipmentId?: true
    trackingNumber?: true
    shipmentStatus?: true
    labelUrl?: true
    courierCompany?: true
    packageWeight?: true
    packageLength?: true
    packageWidth?: true
    packageHeight?: true
    goodsValue?: true
    orderNotes?: true
    adminNotes?: true
    needsAttention?: true
    trackingToken?: true
    appliedCode?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    email?: true
    phone?: true
    checkoutMode?: true
    firstName?: true
    lastName?: true
    country?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    companyName?: true
    nip?: true
    subtotal?: true
    discount?: true
    shipping?: true
    total?: true
    paymentProvider?: true
    paymentStatus?: true
    fulfillmentStatus?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    deliveryMethod?: true
    inpostPointId?: true
    inpostPointName?: true
    inpostPointAddress?: true
    inpostPointCity?: true
    inpostPointPostalCode?: true
    shipmentId?: true
    trackingNumber?: true
    shipmentStatus?: true
    labelUrl?: true
    courierCompany?: true
    packageWeight?: true
    packageLength?: true
    packageWidth?: true
    packageHeight?: true
    goodsValue?: true
    orderNotes?: true
    adminNotes?: true
    needsAttention?: true
    trackingToken?: true
    appliedCode?: true
    partnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    email: string
    phone: string | null
    checkoutMode: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName: string | null
    nip: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider: string | null
    paymentStatus: string
    fulfillmentStatus: string
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    deliveryMethod: string
    inpostPointId: string | null
    inpostPointName: string | null
    inpostPointAddress: string | null
    inpostPointCity: string | null
    inpostPointPostalCode: string | null
    shipmentId: string | null
    trackingNumber: string | null
    shipmentStatus: string | null
    labelUrl: string | null
    courierCompany: string
    packageWeight: number | null
    packageLength: number | null
    packageWidth: number | null
    packageHeight: number | null
    goodsValue: number | null
    orderNotes: string | null
    adminNotes: string | null
    needsAttention: boolean
    trackingToken: string
    appliedCode: string | null
    partnerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    email?: boolean
    phone?: boolean
    checkoutMode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    companyName?: boolean
    nip?: boolean
    subtotal?: boolean
    discount?: boolean
    shipping?: boolean
    total?: boolean
    paymentProvider?: boolean
    paymentStatus?: boolean
    fulfillmentStatus?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    deliveryMethod?: boolean
    inpostPointId?: boolean
    inpostPointName?: boolean
    inpostPointAddress?: boolean
    inpostPointCity?: boolean
    inpostPointPostalCode?: boolean
    shipmentId?: boolean
    trackingNumber?: boolean
    shipmentStatus?: boolean
    labelUrl?: boolean
    courierCompany?: boolean
    packageWeight?: boolean
    packageLength?: boolean
    packageWidth?: boolean
    packageHeight?: boolean
    goodsValue?: boolean
    orderNotes?: boolean
    adminNotes?: boolean
    needsAttention?: boolean
    trackingToken?: boolean
    appliedCode?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    email?: boolean
    phone?: boolean
    checkoutMode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    companyName?: boolean
    nip?: boolean
    subtotal?: boolean
    discount?: boolean
    shipping?: boolean
    total?: boolean
    paymentProvider?: boolean
    paymentStatus?: boolean
    fulfillmentStatus?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    deliveryMethod?: boolean
    inpostPointId?: boolean
    inpostPointName?: boolean
    inpostPointAddress?: boolean
    inpostPointCity?: boolean
    inpostPointPostalCode?: boolean
    shipmentId?: boolean
    trackingNumber?: boolean
    shipmentStatus?: boolean
    labelUrl?: boolean
    courierCompany?: boolean
    packageWeight?: boolean
    packageLength?: boolean
    packageWidth?: boolean
    packageHeight?: boolean
    goodsValue?: boolean
    orderNotes?: boolean
    adminNotes?: boolean
    needsAttention?: boolean
    trackingToken?: boolean
    appliedCode?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    email?: boolean
    phone?: boolean
    checkoutMode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    companyName?: boolean
    nip?: boolean
    subtotal?: boolean
    discount?: boolean
    shipping?: boolean
    total?: boolean
    paymentProvider?: boolean
    paymentStatus?: boolean
    fulfillmentStatus?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    deliveryMethod?: boolean
    inpostPointId?: boolean
    inpostPointName?: boolean
    inpostPointAddress?: boolean
    inpostPointCity?: boolean
    inpostPointPostalCode?: boolean
    shipmentId?: boolean
    trackingNumber?: boolean
    shipmentStatus?: boolean
    labelUrl?: boolean
    courierCompany?: boolean
    packageWeight?: boolean
    packageLength?: boolean
    packageWidth?: boolean
    packageHeight?: boolean
    goodsValue?: boolean
    orderNotes?: boolean
    adminNotes?: boolean
    needsAttention?: boolean
    trackingToken?: boolean
    appliedCode?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    email?: boolean
    phone?: boolean
    checkoutMode?: boolean
    firstName?: boolean
    lastName?: boolean
    country?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    companyName?: boolean
    nip?: boolean
    subtotal?: boolean
    discount?: boolean
    shipping?: boolean
    total?: boolean
    paymentProvider?: boolean
    paymentStatus?: boolean
    fulfillmentStatus?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    deliveryMethod?: boolean
    inpostPointId?: boolean
    inpostPointName?: boolean
    inpostPointAddress?: boolean
    inpostPointCity?: boolean
    inpostPointPostalCode?: boolean
    shipmentId?: boolean
    trackingNumber?: boolean
    shipmentStatus?: boolean
    labelUrl?: boolean
    courierCompany?: boolean
    packageWeight?: boolean
    packageLength?: boolean
    packageWidth?: boolean
    packageHeight?: boolean
    goodsValue?: boolean
    orderNotes?: boolean
    adminNotes?: boolean
    needsAttention?: boolean
    trackingToken?: boolean
    appliedCode?: boolean
    partnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "email" | "phone" | "checkoutMode" | "firstName" | "lastName" | "country" | "city" | "postalCode" | "street" | "houseNumber" | "companyName" | "nip" | "subtotal" | "discount" | "shipping" | "total" | "paymentProvider" | "paymentStatus" | "fulfillmentStatus" | "stripeSessionId" | "stripePaymentIntentId" | "deliveryMethod" | "inpostPointId" | "inpostPointName" | "inpostPointAddress" | "inpostPointCity" | "inpostPointPostalCode" | "shipmentId" | "trackingNumber" | "shipmentStatus" | "labelUrl" | "courierCompany" | "packageWeight" | "packageLength" | "packageWidth" | "packageHeight" | "goodsValue" | "orderNotes" | "adminNotes" | "needsAttention" | "trackingToken" | "appliedCode" | "partnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      email: string
      phone: string | null
      checkoutMode: string
      firstName: string
      lastName: string
      country: string
      city: string
      postalCode: string
      street: string
      houseNumber: string
      companyName: string | null
      nip: string | null
      subtotal: number
      discount: number
      shipping: number
      total: number
      paymentProvider: string | null
      paymentStatus: string
      fulfillmentStatus: string
      stripeSessionId: string | null
      stripePaymentIntentId: string | null
      deliveryMethod: string
      inpostPointId: string | null
      inpostPointName: string | null
      inpostPointAddress: string | null
      inpostPointCity: string | null
      inpostPointPostalCode: string | null
      shipmentId: string | null
      trackingNumber: string | null
      shipmentStatus: string | null
      labelUrl: string | null
      courierCompany: string
      packageWeight: number | null
      packageLength: number | null
      packageWidth: number | null
      packageHeight: number | null
      goodsValue: number | null
      orderNotes: string | null
      adminNotes: string | null
      needsAttention: boolean
      trackingToken: string
      appliedCode: string | null
      partnerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly checkoutMode: FieldRef<"Order", 'String'>
    readonly firstName: FieldRef<"Order", 'String'>
    readonly lastName: FieldRef<"Order", 'String'>
    readonly country: FieldRef<"Order", 'String'>
    readonly city: FieldRef<"Order", 'String'>
    readonly postalCode: FieldRef<"Order", 'String'>
    readonly street: FieldRef<"Order", 'String'>
    readonly houseNumber: FieldRef<"Order", 'String'>
    readonly companyName: FieldRef<"Order", 'String'>
    readonly nip: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly shipping: FieldRef<"Order", 'Float'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly paymentProvider: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly fulfillmentStatus: FieldRef<"Order", 'String'>
    readonly stripeSessionId: FieldRef<"Order", 'String'>
    readonly stripePaymentIntentId: FieldRef<"Order", 'String'>
    readonly deliveryMethod: FieldRef<"Order", 'String'>
    readonly inpostPointId: FieldRef<"Order", 'String'>
    readonly inpostPointName: FieldRef<"Order", 'String'>
    readonly inpostPointAddress: FieldRef<"Order", 'String'>
    readonly inpostPointCity: FieldRef<"Order", 'String'>
    readonly inpostPointPostalCode: FieldRef<"Order", 'String'>
    readonly shipmentId: FieldRef<"Order", 'String'>
    readonly trackingNumber: FieldRef<"Order", 'String'>
    readonly shipmentStatus: FieldRef<"Order", 'String'>
    readonly labelUrl: FieldRef<"Order", 'String'>
    readonly courierCompany: FieldRef<"Order", 'String'>
    readonly packageWeight: FieldRef<"Order", 'Float'>
    readonly packageLength: FieldRef<"Order", 'Float'>
    readonly packageWidth: FieldRef<"Order", 'Float'>
    readonly packageHeight: FieldRef<"Order", 'Float'>
    readonly goodsValue: FieldRef<"Order", 'Float'>
    readonly orderNotes: FieldRef<"Order", 'String'>
    readonly adminNotes: FieldRef<"Order", 'String'>
    readonly needsAttention: FieldRef<"Order", 'Boolean'>
    readonly trackingToken: FieldRef<"Order", 'String'>
    readonly appliedCode: FieldRef<"Order", 'String'>
    readonly partnerId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    size: string | null
    quantity: number | null
    unitPrice: number | null
    currency: string | null
    image: string | null
    productName: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    variantId: string | null
    size: string | null
    quantity: number | null
    unitPrice: number | null
    currency: string | null
    image: string | null
    productName: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    size: number
    quantity: number
    unitPrice: number
    currency: number
    image: number
    productName: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    size?: true
    quantity?: true
    unitPrice?: true
    currency?: true
    image?: true
    productName?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    size?: true
    quantity?: true
    unitPrice?: true
    currency?: true
    image?: true
    productName?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    size?: true
    quantity?: true
    unitPrice?: true
    currency?: true
    image?: true
    productName?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    variantId: string | null
    size: string | null
    quantity: number
    unitPrice: number
    currency: string
    image: string | null
    productName: string
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    currency?: boolean
    image?: boolean
    productName?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    currency?: boolean
    image?: boolean
    productName?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    currency?: boolean
    image?: boolean
    productName?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    currency?: boolean
    image?: boolean
    productName?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "variantId" | "size" | "quantity" | "unitPrice" | "currency" | "image" | "productName", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      variantId: string | null
      size: string | null
      quantity: number
      unitPrice: number
      currency: string
      image: string | null
      productName: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly variantId: FieldRef<"OrderItem", 'String'>
    readonly size: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly currency: FieldRef<"OrderItem", 'String'>
    readonly image: FieldRef<"OrderItem", 'String'>
    readonly productName: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model PromoCode
   */

  export type AggregatePromoCode = {
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  export type PromoCodeAvgAggregateOutputType = {
    value: number | null
    usageLimit: number | null
    usageCount: number | null
    minimumCartValue: number | null
  }

  export type PromoCodeSumAggregateOutputType = {
    value: number | null
    usageLimit: number | null
    usageCount: number | null
    minimumCartValue: number | null
  }

  export type PromoCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: number | null
    active: boolean | null
    expiration: Date | null
    usageLimit: number | null
    usageCount: number | null
    productScope: string | null
    collectionScope: string | null
    minimumCartValue: number | null
    partnerId: string | null
  }

  export type PromoCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: number | null
    active: boolean | null
    expiration: Date | null
    usageLimit: number | null
    usageCount: number | null
    productScope: string | null
    collectionScope: string | null
    minimumCartValue: number | null
    partnerId: string | null
  }

  export type PromoCodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    value: number
    active: number
    expiration: number
    usageLimit: number
    usageCount: number
    productScope: number
    collectionScope: number
    minimumCartValue: number
    partnerId: number
    _all: number
  }


  export type PromoCodeAvgAggregateInputType = {
    value?: true
    usageLimit?: true
    usageCount?: true
    minimumCartValue?: true
  }

  export type PromoCodeSumAggregateInputType = {
    value?: true
    usageLimit?: true
    usageCount?: true
    minimumCartValue?: true
  }

  export type PromoCodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    active?: true
    expiration?: true
    usageLimit?: true
    usageCount?: true
    productScope?: true
    collectionScope?: true
    minimumCartValue?: true
    partnerId?: true
  }

  export type PromoCodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    active?: true
    expiration?: true
    usageLimit?: true
    usageCount?: true
    productScope?: true
    collectionScope?: true
    minimumCartValue?: true
    partnerId?: true
  }

  export type PromoCodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    active?: true
    expiration?: true
    usageLimit?: true
    usageCount?: true
    productScope?: true
    collectionScope?: true
    minimumCartValue?: true
    partnerId?: true
    _all?: true
  }

  export type PromoCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCode to aggregate.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromoCodes
    **/
    _count?: true | PromoCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoCodeMaxAggregateInputType
  }

  export type GetPromoCodeAggregateType<T extends PromoCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromoCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromoCode[P]>
      : GetScalarType<T[P], AggregatePromoCode[P]>
  }




  export type PromoCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoCodeWhereInput
    orderBy?: PromoCodeOrderByWithAggregationInput | PromoCodeOrderByWithAggregationInput[]
    by: PromoCodeScalarFieldEnum[] | PromoCodeScalarFieldEnum
    having?: PromoCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCodeCountAggregateInputType | true
    _avg?: PromoCodeAvgAggregateInputType
    _sum?: PromoCodeSumAggregateInputType
    _min?: PromoCodeMinAggregateInputType
    _max?: PromoCodeMaxAggregateInputType
  }

  export type PromoCodeGroupByOutputType = {
    id: string
    code: string
    type: string
    value: number
    active: boolean
    expiration: Date | null
    usageLimit: number | null
    usageCount: number
    productScope: string | null
    collectionScope: string | null
    minimumCartValue: number | null
    partnerId: string | null
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  type GetPromoCodeGroupByPayload<T extends PromoCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
        }
      >
    >


  export type PromoCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    active?: boolean
    expiration?: boolean
    usageLimit?: boolean
    usageCount?: boolean
    productScope?: boolean
    collectionScope?: boolean
    minimumCartValue?: boolean
    partnerId?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    active?: boolean
    expiration?: boolean
    usageLimit?: boolean
    usageCount?: boolean
    productScope?: boolean
    collectionScope?: boolean
    minimumCartValue?: boolean
    partnerId?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    active?: boolean
    expiration?: boolean
    usageLimit?: boolean
    usageCount?: boolean
    productScope?: boolean
    collectionScope?: boolean
    minimumCartValue?: boolean
    partnerId?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    active?: boolean
    expiration?: boolean
    usageLimit?: boolean
    usageCount?: boolean
    productScope?: boolean
    collectionScope?: boolean
    minimumCartValue?: boolean
    partnerId?: boolean
  }

  export type PromoCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "value" | "active" | "expiration" | "usageLimit" | "usageCount" | "productScope" | "collectionScope" | "minimumCartValue" | "partnerId", ExtArgs["result"]["promoCode"]>

  export type $PromoCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromoCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: string
      value: number
      active: boolean
      expiration: Date | null
      usageLimit: number | null
      usageCount: number
      productScope: string | null
      collectionScope: string | null
      minimumCartValue: number | null
      partnerId: string | null
    }, ExtArgs["result"]["promoCode"]>
    composites: {}
  }

  type PromoCodeGetPayload<S extends boolean | null | undefined | PromoCodeDefaultArgs> = $Result.GetResult<Prisma.$PromoCodePayload, S>

  type PromoCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCodeCountAggregateInputType | true
    }

  export interface PromoCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromoCode'], meta: { name: 'PromoCode' } }
    /**
     * Find zero or one PromoCode that matches the filter.
     * @param {PromoCodeFindUniqueArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoCodeFindUniqueArgs>(args: SelectSubset<T, PromoCodeFindUniqueArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromoCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoCodeFindUniqueOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoCodeFindFirstArgs>(args?: SelectSubset<T, PromoCodeFindFirstArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromoCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromoCodes
     * const promoCodes = await prisma.promoCode.findMany()
     * 
     * // Get first 10 PromoCodes
     * const promoCodes = await prisma.promoCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoCodeFindManyArgs>(args?: SelectSubset<T, PromoCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromoCode.
     * @param {PromoCodeCreateArgs} args - Arguments to create a PromoCode.
     * @example
     * // Create one PromoCode
     * const PromoCode = await prisma.promoCode.create({
     *   data: {
     *     // ... data to create a PromoCode
     *   }
     * })
     * 
     */
    create<T extends PromoCodeCreateArgs>(args: SelectSubset<T, PromoCodeCreateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromoCodes.
     * @param {PromoCodeCreateManyArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCodeCreateManyArgs>(args?: SelectSubset<T, PromoCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromoCodes and returns the data saved in the database.
     * @param {PromoCodeCreateManyAndReturnArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromoCode.
     * @param {PromoCodeDeleteArgs} args - Arguments to delete one PromoCode.
     * @example
     * // Delete one PromoCode
     * const PromoCode = await prisma.promoCode.delete({
     *   where: {
     *     // ... filter to delete one PromoCode
     *   }
     * })
     * 
     */
    delete<T extends PromoCodeDeleteArgs>(args: SelectSubset<T, PromoCodeDeleteArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromoCode.
     * @param {PromoCodeUpdateArgs} args - Arguments to update one PromoCode.
     * @example
     * // Update one PromoCode
     * const promoCode = await prisma.promoCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoCodeUpdateArgs>(args: SelectSubset<T, PromoCodeUpdateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromoCodes.
     * @param {PromoCodeDeleteManyArgs} args - Arguments to filter PromoCodes to delete.
     * @example
     * // Delete a few PromoCodes
     * const { count } = await prisma.promoCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoCodeDeleteManyArgs>(args?: SelectSubset<T, PromoCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoCodeUpdateManyArgs>(args: SelectSubset<T, PromoCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes and returns the data updated in the database.
     * @param {PromoCodeUpdateManyAndReturnArgs} args - Arguments to update many PromoCodes.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromoCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromoCode.
     * @param {PromoCodeUpsertArgs} args - Arguments to update or create a PromoCode.
     * @example
     * // Update or create a PromoCode
     * const promoCode = await prisma.promoCode.upsert({
     *   create: {
     *     // ... data to create a PromoCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromoCode we want to update
     *   }
     * })
     */
    upsert<T extends PromoCodeUpsertArgs>(args: SelectSubset<T, PromoCodeUpsertArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeCountArgs} args - Arguments to filter PromoCodes to count.
     * @example
     * // Count the number of PromoCodes
     * const count = await prisma.promoCode.count({
     *   where: {
     *     // ... the filter for the PromoCodes we want to count
     *   }
     * })
    **/
    count<T extends PromoCodeCountArgs>(
      args?: Subset<T, PromoCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoCodeAggregateArgs>(args: Subset<T, PromoCodeAggregateArgs>): Prisma.PrismaPromise<GetPromoCodeAggregateType<T>>

    /**
     * Group by PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoCodeGroupByArgs['orderBy'] }
        : { orderBy?: PromoCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromoCode model
   */
  readonly fields: PromoCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromoCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromoCode model
   */
  interface PromoCodeFieldRefs {
    readonly id: FieldRef<"PromoCode", 'String'>
    readonly code: FieldRef<"PromoCode", 'String'>
    readonly type: FieldRef<"PromoCode", 'String'>
    readonly value: FieldRef<"PromoCode", 'Float'>
    readonly active: FieldRef<"PromoCode", 'Boolean'>
    readonly expiration: FieldRef<"PromoCode", 'DateTime'>
    readonly usageLimit: FieldRef<"PromoCode", 'Int'>
    readonly usageCount: FieldRef<"PromoCode", 'Int'>
    readonly productScope: FieldRef<"PromoCode", 'String'>
    readonly collectionScope: FieldRef<"PromoCode", 'String'>
    readonly minimumCartValue: FieldRef<"PromoCode", 'Float'>
    readonly partnerId: FieldRef<"PromoCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PromoCode findUnique
   */
  export type PromoCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findUniqueOrThrow
   */
  export type PromoCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findFirst
   */
  export type PromoCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findFirstOrThrow
   */
  export type PromoCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findMany
   */
  export type PromoCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCodes to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode create
   */
  export type PromoCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a PromoCode.
     */
    data: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
  }

  /**
   * PromoCode createMany
   */
  export type PromoCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
  }

  /**
   * PromoCode createManyAndReturn
   */
  export type PromoCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
  }

  /**
   * PromoCode update
   */
  export type PromoCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a PromoCode.
     */
    data: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
    /**
     * Choose, which PromoCode to update.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode updateMany
   */
  export type PromoCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode updateManyAndReturn
   */
  export type PromoCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode upsert
   */
  export type PromoCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the PromoCode to update in case it exists.
     */
    where: PromoCodeWhereUniqueInput
    /**
     * In case the PromoCode found by the `where` argument doesn't exist, create a new PromoCode with this data.
     */
    create: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
    /**
     * In case the PromoCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
  }

  /**
   * PromoCode delete
   */
  export type PromoCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter which PromoCode to delete.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode deleteMany
   */
  export type PromoCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCodes to delete
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to delete.
     */
    limit?: number
  }

  /**
   * PromoCode without action
   */
  export type PromoCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    salePrice: number | null
    vatRate: number | null
    stock: number | null
    weight: number | null
    width: number | null
    height: number | null
    depth: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    salePrice: number | null
    vatRate: number | null
    stock: number | null
    weight: number | null
    width: number | null
    height: number | null
    depth: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    name: string | null
    nameEn: string | null
    slug: string | null
    sku: string | null
    category: string | null
    categoryLabel: string | null
    categoryLabelEn: string | null
    shortDescription: string | null
    shortDescriptionEn: string | null
    description: string | null
    descriptionEn: string | null
    material: string | null
    materialEn: string | null
    details: string | null
    detailsEn: string | null
    price: number | null
    salePrice: number | null
    currency: string | null
    vatRate: number | null
    stock: number | null
    weight: number | null
    width: number | null
    height: number | null
    depth: number | null
    status: string | null
    isArchived: boolean | null
    deletedAt: Date | null
    featured: boolean | null
    dropFeatured: boolean | null
    colors: string | null
    sizes: string | null
    seoTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    name: string | null
    nameEn: string | null
    slug: string | null
    sku: string | null
    category: string | null
    categoryLabel: string | null
    categoryLabelEn: string | null
    shortDescription: string | null
    shortDescriptionEn: string | null
    description: string | null
    descriptionEn: string | null
    material: string | null
    materialEn: string | null
    details: string | null
    detailsEn: string | null
    price: number | null
    salePrice: number | null
    currency: string | null
    vatRate: number | null
    stock: number | null
    weight: number | null
    width: number | null
    height: number | null
    depth: number | null
    status: string | null
    isArchived: boolean | null
    deletedAt: Date | null
    featured: boolean | null
    dropFeatured: boolean | null
    colors: string | null
    sizes: string | null
    seoTitle: string | null
    metaDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    externalId: number
    name: number
    nameEn: number
    slug: number
    sku: number
    category: number
    categoryLabel: number
    categoryLabelEn: number
    shortDescription: number
    shortDescriptionEn: number
    description: number
    descriptionEn: number
    material: number
    materialEn: number
    details: number
    detailsEn: number
    price: number
    salePrice: number
    currency: number
    vatRate: number
    stock: number
    weight: number
    width: number
    height: number
    depth: number
    status: number
    isArchived: number
    deletedAt: number
    featured: number
    dropFeatured: number
    colors: number
    sizes: number
    seoTitle: number
    metaDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    salePrice?: true
    vatRate?: true
    stock?: true
    weight?: true
    width?: true
    height?: true
    depth?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    salePrice?: true
    vatRate?: true
    stock?: true
    weight?: true
    width?: true
    height?: true
    depth?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    nameEn?: true
    slug?: true
    sku?: true
    category?: true
    categoryLabel?: true
    categoryLabelEn?: true
    shortDescription?: true
    shortDescriptionEn?: true
    description?: true
    descriptionEn?: true
    material?: true
    materialEn?: true
    details?: true
    detailsEn?: true
    price?: true
    salePrice?: true
    currency?: true
    vatRate?: true
    stock?: true
    weight?: true
    width?: true
    height?: true
    depth?: true
    status?: true
    isArchived?: true
    deletedAt?: true
    featured?: true
    dropFeatured?: true
    colors?: true
    sizes?: true
    seoTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    nameEn?: true
    slug?: true
    sku?: true
    category?: true
    categoryLabel?: true
    categoryLabelEn?: true
    shortDescription?: true
    shortDescriptionEn?: true
    description?: true
    descriptionEn?: true
    material?: true
    materialEn?: true
    details?: true
    detailsEn?: true
    price?: true
    salePrice?: true
    currency?: true
    vatRate?: true
    stock?: true
    weight?: true
    width?: true
    height?: true
    depth?: true
    status?: true
    isArchived?: true
    deletedAt?: true
    featured?: true
    dropFeatured?: true
    colors?: true
    sizes?: true
    seoTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    nameEn?: true
    slug?: true
    sku?: true
    category?: true
    categoryLabel?: true
    categoryLabelEn?: true
    shortDescription?: true
    shortDescriptionEn?: true
    description?: true
    descriptionEn?: true
    material?: true
    materialEn?: true
    details?: true
    detailsEn?: true
    price?: true
    salePrice?: true
    currency?: true
    vatRate?: true
    stock?: true
    weight?: true
    width?: true
    height?: true
    depth?: true
    status?: true
    isArchived?: true
    deletedAt?: true
    featured?: true
    dropFeatured?: true
    colors?: true
    sizes?: true
    seoTitle?: true
    metaDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    externalId: string | null
    name: string
    nameEn: string | null
    slug: string
    sku: string
    category: string
    categoryLabel: string | null
    categoryLabelEn: string | null
    shortDescription: string
    shortDescriptionEn: string | null
    description: string
    descriptionEn: string | null
    material: string | null
    materialEn: string | null
    details: string | null
    detailsEn: string | null
    price: number
    salePrice: number | null
    currency: string
    vatRate: number
    stock: number
    weight: number | null
    width: number | null
    height: number | null
    depth: number | null
    status: string
    isArchived: boolean
    deletedAt: Date | null
    featured: boolean
    dropFeatured: boolean
    colors: string | null
    sizes: string | null
    seoTitle: string | null
    metaDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    nameEn?: boolean
    slug?: boolean
    sku?: boolean
    category?: boolean
    categoryLabel?: boolean
    categoryLabelEn?: boolean
    shortDescription?: boolean
    shortDescriptionEn?: boolean
    description?: boolean
    descriptionEn?: boolean
    material?: boolean
    materialEn?: boolean
    details?: boolean
    detailsEn?: boolean
    price?: boolean
    salePrice?: boolean
    currency?: boolean
    vatRate?: boolean
    stock?: boolean
    weight?: boolean
    width?: boolean
    height?: boolean
    depth?: boolean
    status?: boolean
    isArchived?: boolean
    deletedAt?: boolean
    featured?: boolean
    dropFeatured?: boolean
    colors?: boolean
    sizes?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Product$imagesArgs<ExtArgs>
    history?: boolean | Product$historyArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    nameEn?: boolean
    slug?: boolean
    sku?: boolean
    category?: boolean
    categoryLabel?: boolean
    categoryLabelEn?: boolean
    shortDescription?: boolean
    shortDescriptionEn?: boolean
    description?: boolean
    descriptionEn?: boolean
    material?: boolean
    materialEn?: boolean
    details?: boolean
    detailsEn?: boolean
    price?: boolean
    salePrice?: boolean
    currency?: boolean
    vatRate?: boolean
    stock?: boolean
    weight?: boolean
    width?: boolean
    height?: boolean
    depth?: boolean
    status?: boolean
    isArchived?: boolean
    deletedAt?: boolean
    featured?: boolean
    dropFeatured?: boolean
    colors?: boolean
    sizes?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    nameEn?: boolean
    slug?: boolean
    sku?: boolean
    category?: boolean
    categoryLabel?: boolean
    categoryLabelEn?: boolean
    shortDescription?: boolean
    shortDescriptionEn?: boolean
    description?: boolean
    descriptionEn?: boolean
    material?: boolean
    materialEn?: boolean
    details?: boolean
    detailsEn?: boolean
    price?: boolean
    salePrice?: boolean
    currency?: boolean
    vatRate?: boolean
    stock?: boolean
    weight?: boolean
    width?: boolean
    height?: boolean
    depth?: boolean
    status?: boolean
    isArchived?: boolean
    deletedAt?: boolean
    featured?: boolean
    dropFeatured?: boolean
    colors?: boolean
    sizes?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    externalId?: boolean
    name?: boolean
    nameEn?: boolean
    slug?: boolean
    sku?: boolean
    category?: boolean
    categoryLabel?: boolean
    categoryLabelEn?: boolean
    shortDescription?: boolean
    shortDescriptionEn?: boolean
    description?: boolean
    descriptionEn?: boolean
    material?: boolean
    materialEn?: boolean
    details?: boolean
    detailsEn?: boolean
    price?: boolean
    salePrice?: boolean
    currency?: boolean
    vatRate?: boolean
    stock?: boolean
    weight?: boolean
    width?: boolean
    height?: boolean
    depth?: boolean
    status?: boolean
    isArchived?: boolean
    deletedAt?: boolean
    featured?: boolean
    dropFeatured?: boolean
    colors?: boolean
    sizes?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "name" | "nameEn" | "slug" | "sku" | "category" | "categoryLabel" | "categoryLabelEn" | "shortDescription" | "shortDescriptionEn" | "description" | "descriptionEn" | "material" | "materialEn" | "details" | "detailsEn" | "price" | "salePrice" | "currency" | "vatRate" | "stock" | "weight" | "width" | "height" | "depth" | "status" | "isArchived" | "deletedAt" | "featured" | "dropFeatured" | "colors" | "sizes" | "seoTitle" | "metaDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Product$imagesArgs<ExtArgs>
    history?: boolean | Product$historyArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      history: Prisma.$ProductHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      name: string
      nameEn: string | null
      slug: string
      sku: string
      category: string
      categoryLabel: string | null
      categoryLabelEn: string | null
      shortDescription: string
      shortDescriptionEn: string | null
      description: string
      descriptionEn: string | null
      material: string | null
      materialEn: string | null
      details: string | null
      detailsEn: string | null
      price: number
      salePrice: number | null
      currency: string
      vatRate: number
      stock: number
      weight: number | null
      width: number | null
      height: number | null
      depth: number | null
      status: string
      isArchived: boolean
      deletedAt: Date | null
      featured: boolean
      dropFeatured: boolean
      colors: string | null
      sizes: string | null
      seoTitle: string | null
      metaDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Product$historyArgs<ExtArgs> = {}>(args?: Subset<T, Product$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly externalId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly nameEn: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly categoryLabel: FieldRef<"Product", 'String'>
    readonly categoryLabelEn: FieldRef<"Product", 'String'>
    readonly shortDescription: FieldRef<"Product", 'String'>
    readonly shortDescriptionEn: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly descriptionEn: FieldRef<"Product", 'String'>
    readonly material: FieldRef<"Product", 'String'>
    readonly materialEn: FieldRef<"Product", 'String'>
    readonly details: FieldRef<"Product", 'String'>
    readonly detailsEn: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly salePrice: FieldRef<"Product", 'Float'>
    readonly currency: FieldRef<"Product", 'String'>
    readonly vatRate: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly weight: FieldRef<"Product", 'Float'>
    readonly width: FieldRef<"Product", 'Float'>
    readonly height: FieldRef<"Product", 'Float'>
    readonly depth: FieldRef<"Product", 'Float'>
    readonly status: FieldRef<"Product", 'String'>
    readonly isArchived: FieldRef<"Product", 'Boolean'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
    readonly featured: FieldRef<"Product", 'Boolean'>
    readonly dropFeatured: FieldRef<"Product", 'Boolean'>
    readonly colors: FieldRef<"Product", 'String'>
    readonly sizes: FieldRef<"Product", 'String'>
    readonly seoTitle: FieldRef<"Product", 'String'>
    readonly metaDescription: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.history
   */
  export type Product$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    where?: ProductHistoryWhereInput
    orderBy?: ProductHistoryOrderByWithRelationInput | ProductHistoryOrderByWithRelationInput[]
    cursor?: ProductHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductHistoryScalarFieldEnum | ProductHistoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    position: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    position: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    alt: string | null
    position: number | null
    isThumbnail: boolean | null
    createdAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    alt: string | null
    position: number | null
    isThumbnail: boolean | null
    createdAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    alt: number
    position: number
    isThumbnail: number
    createdAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    position?: true
  }

  export type ProductImageSumAggregateInputType = {
    position?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    alt?: true
    position?: true
    isThumbnail?: true
    createdAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    alt?: true
    position?: true
    isThumbnail?: true
    createdAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    alt?: true
    position?: true
    isThumbnail?: true
    createdAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    alt: string | null
    position: number
    isThumbnail: boolean
    createdAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isThumbnail?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isThumbnail?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isThumbnail?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    alt?: boolean
    position?: boolean
    isThumbnail?: boolean
    createdAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "alt" | "position" | "isThumbnail" | "createdAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      alt: string | null
      position: number
      isThumbnail: boolean
      createdAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'String'>
    readonly productId: FieldRef<"ProductImage", 'String'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly alt: FieldRef<"ProductImage", 'String'>
    readonly position: FieldRef<"ProductImage", 'Int'>
    readonly isThumbnail: FieldRef<"ProductImage", 'Boolean'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductHistory
   */

  export type AggregateProductHistory = {
    _count: ProductHistoryCountAggregateOutputType | null
    _min: ProductHistoryMinAggregateOutputType | null
    _max: ProductHistoryMaxAggregateOutputType | null
  }

  export type ProductHistoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    author: string | null
    action: string | null
    snapshot: string | null
    createdAt: Date | null
  }

  export type ProductHistoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    author: string | null
    action: string | null
    snapshot: string | null
    createdAt: Date | null
  }

  export type ProductHistoryCountAggregateOutputType = {
    id: number
    productId: number
    author: number
    action: number
    snapshot: number
    createdAt: number
    _all: number
  }


  export type ProductHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    author?: true
    action?: true
    snapshot?: true
    createdAt?: true
  }

  export type ProductHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    author?: true
    action?: true
    snapshot?: true
    createdAt?: true
  }

  export type ProductHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    author?: true
    action?: true
    snapshot?: true
    createdAt?: true
    _all?: true
  }

  export type ProductHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHistory to aggregate.
     */
    where?: ProductHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistories to fetch.
     */
    orderBy?: ProductHistoryOrderByWithRelationInput | ProductHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductHistories
    **/
    _count?: true | ProductHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductHistoryMaxAggregateInputType
  }

  export type GetProductHistoryAggregateType<T extends ProductHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductHistory[P]>
      : GetScalarType<T[P], AggregateProductHistory[P]>
  }




  export type ProductHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductHistoryWhereInput
    orderBy?: ProductHistoryOrderByWithAggregationInput | ProductHistoryOrderByWithAggregationInput[]
    by: ProductHistoryScalarFieldEnum[] | ProductHistoryScalarFieldEnum
    having?: ProductHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductHistoryCountAggregateInputType | true
    _min?: ProductHistoryMinAggregateInputType
    _max?: ProductHistoryMaxAggregateInputType
  }

  export type ProductHistoryGroupByOutputType = {
    id: string
    productId: string
    author: string
    action: string
    snapshot: string
    createdAt: Date
    _count: ProductHistoryCountAggregateOutputType | null
    _min: ProductHistoryMinAggregateOutputType | null
    _max: ProductHistoryMaxAggregateOutputType | null
  }

  type GetProductHistoryGroupByPayload<T extends ProductHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    author?: boolean
    action?: boolean
    snapshot?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productHistory"]>

  export type ProductHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    author?: boolean
    action?: boolean
    snapshot?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productHistory"]>

  export type ProductHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    author?: boolean
    action?: boolean
    snapshot?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productHistory"]>

  export type ProductHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    author?: boolean
    action?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }

  export type ProductHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "author" | "action" | "snapshot" | "createdAt", ExtArgs["result"]["productHistory"]>
  export type ProductHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      author: string
      action: string
      snapshot: string
      createdAt: Date
    }, ExtArgs["result"]["productHistory"]>
    composites: {}
  }

  type ProductHistoryGetPayload<S extends boolean | null | undefined | ProductHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProductHistoryPayload, S>

  type ProductHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductHistoryCountAggregateInputType | true
    }

  export interface ProductHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductHistory'], meta: { name: 'ProductHistory' } }
    /**
     * Find zero or one ProductHistory that matches the filter.
     * @param {ProductHistoryFindUniqueArgs} args - Arguments to find a ProductHistory
     * @example
     * // Get one ProductHistory
     * const productHistory = await prisma.productHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductHistoryFindUniqueArgs>(args: SelectSubset<T, ProductHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProductHistory
     * @example
     * // Get one ProductHistory
     * const productHistory = await prisma.productHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryFindFirstArgs} args - Arguments to find a ProductHistory
     * @example
     * // Get one ProductHistory
     * const productHistory = await prisma.productHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductHistoryFindFirstArgs>(args?: SelectSubset<T, ProductHistoryFindFirstArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryFindFirstOrThrowArgs} args - Arguments to find a ProductHistory
     * @example
     * // Get one ProductHistory
     * const productHistory = await prisma.productHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductHistories
     * const productHistories = await prisma.productHistory.findMany()
     * 
     * // Get first 10 ProductHistories
     * const productHistories = await prisma.productHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productHistoryWithIdOnly = await prisma.productHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductHistoryFindManyArgs>(args?: SelectSubset<T, ProductHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductHistory.
     * @param {ProductHistoryCreateArgs} args - Arguments to create a ProductHistory.
     * @example
     * // Create one ProductHistory
     * const ProductHistory = await prisma.productHistory.create({
     *   data: {
     *     // ... data to create a ProductHistory
     *   }
     * })
     * 
     */
    create<T extends ProductHistoryCreateArgs>(args: SelectSubset<T, ProductHistoryCreateArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductHistories.
     * @param {ProductHistoryCreateManyArgs} args - Arguments to create many ProductHistories.
     * @example
     * // Create many ProductHistories
     * const productHistory = await prisma.productHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductHistoryCreateManyArgs>(args?: SelectSubset<T, ProductHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductHistories and returns the data saved in the database.
     * @param {ProductHistoryCreateManyAndReturnArgs} args - Arguments to create many ProductHistories.
     * @example
     * // Create many ProductHistories
     * const productHistory = await prisma.productHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductHistories and only return the `id`
     * const productHistoryWithIdOnly = await prisma.productHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductHistory.
     * @param {ProductHistoryDeleteArgs} args - Arguments to delete one ProductHistory.
     * @example
     * // Delete one ProductHistory
     * const ProductHistory = await prisma.productHistory.delete({
     *   where: {
     *     // ... filter to delete one ProductHistory
     *   }
     * })
     * 
     */
    delete<T extends ProductHistoryDeleteArgs>(args: SelectSubset<T, ProductHistoryDeleteArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductHistory.
     * @param {ProductHistoryUpdateArgs} args - Arguments to update one ProductHistory.
     * @example
     * // Update one ProductHistory
     * const productHistory = await prisma.productHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductHistoryUpdateArgs>(args: SelectSubset<T, ProductHistoryUpdateArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductHistories.
     * @param {ProductHistoryDeleteManyArgs} args - Arguments to filter ProductHistories to delete.
     * @example
     * // Delete a few ProductHistories
     * const { count } = await prisma.productHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductHistoryDeleteManyArgs>(args?: SelectSubset<T, ProductHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductHistories
     * const productHistory = await prisma.productHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductHistoryUpdateManyArgs>(args: SelectSubset<T, ProductHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductHistories and returns the data updated in the database.
     * @param {ProductHistoryUpdateManyAndReturnArgs} args - Arguments to update many ProductHistories.
     * @example
     * // Update many ProductHistories
     * const productHistory = await prisma.productHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductHistories and only return the `id`
     * const productHistoryWithIdOnly = await prisma.productHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductHistory.
     * @param {ProductHistoryUpsertArgs} args - Arguments to update or create a ProductHistory.
     * @example
     * // Update or create a ProductHistory
     * const productHistory = await prisma.productHistory.upsert({
     *   create: {
     *     // ... data to create a ProductHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProductHistoryUpsertArgs>(args: SelectSubset<T, ProductHistoryUpsertArgs<ExtArgs>>): Prisma__ProductHistoryClient<$Result.GetResult<Prisma.$ProductHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryCountArgs} args - Arguments to filter ProductHistories to count.
     * @example
     * // Count the number of ProductHistories
     * const count = await prisma.productHistory.count({
     *   where: {
     *     // ... the filter for the ProductHistories we want to count
     *   }
     * })
    **/
    count<T extends ProductHistoryCountArgs>(
      args?: Subset<T, ProductHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductHistoryAggregateArgs>(args: Subset<T, ProductHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductHistoryAggregateType<T>>

    /**
     * Group by ProductHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductHistory model
   */
  readonly fields: ProductHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductHistory model
   */
  interface ProductHistoryFieldRefs {
    readonly id: FieldRef<"ProductHistory", 'String'>
    readonly productId: FieldRef<"ProductHistory", 'String'>
    readonly author: FieldRef<"ProductHistory", 'String'>
    readonly action: FieldRef<"ProductHistory", 'String'>
    readonly snapshot: FieldRef<"ProductHistory", 'String'>
    readonly createdAt: FieldRef<"ProductHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductHistory findUnique
   */
  export type ProductHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistory to fetch.
     */
    where: ProductHistoryWhereUniqueInput
  }

  /**
   * ProductHistory findUniqueOrThrow
   */
  export type ProductHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistory to fetch.
     */
    where: ProductHistoryWhereUniqueInput
  }

  /**
   * ProductHistory findFirst
   */
  export type ProductHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistory to fetch.
     */
    where?: ProductHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistories to fetch.
     */
    orderBy?: ProductHistoryOrderByWithRelationInput | ProductHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHistories.
     */
    cursor?: ProductHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHistories.
     */
    distinct?: ProductHistoryScalarFieldEnum | ProductHistoryScalarFieldEnum[]
  }

  /**
   * ProductHistory findFirstOrThrow
   */
  export type ProductHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistory to fetch.
     */
    where?: ProductHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistories to fetch.
     */
    orderBy?: ProductHistoryOrderByWithRelationInput | ProductHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHistories.
     */
    cursor?: ProductHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHistories.
     */
    distinct?: ProductHistoryScalarFieldEnum | ProductHistoryScalarFieldEnum[]
  }

  /**
   * ProductHistory findMany
   */
  export type ProductHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductHistories to fetch.
     */
    where?: ProductHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHistories to fetch.
     */
    orderBy?: ProductHistoryOrderByWithRelationInput | ProductHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductHistories.
     */
    cursor?: ProductHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHistories.
     */
    skip?: number
    distinct?: ProductHistoryScalarFieldEnum | ProductHistoryScalarFieldEnum[]
  }

  /**
   * ProductHistory create
   */
  export type ProductHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductHistory.
     */
    data: XOR<ProductHistoryCreateInput, ProductHistoryUncheckedCreateInput>
  }

  /**
   * ProductHistory createMany
   */
  export type ProductHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductHistories.
     */
    data: ProductHistoryCreateManyInput | ProductHistoryCreateManyInput[]
  }

  /**
   * ProductHistory createManyAndReturn
   */
  export type ProductHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductHistories.
     */
    data: ProductHistoryCreateManyInput | ProductHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductHistory update
   */
  export type ProductHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductHistory.
     */
    data: XOR<ProductHistoryUpdateInput, ProductHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProductHistory to update.
     */
    where: ProductHistoryWhereUniqueInput
  }

  /**
   * ProductHistory updateMany
   */
  export type ProductHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductHistories.
     */
    data: XOR<ProductHistoryUpdateManyMutationInput, ProductHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductHistories to update
     */
    where?: ProductHistoryWhereInput
    /**
     * Limit how many ProductHistories to update.
     */
    limit?: number
  }

  /**
   * ProductHistory updateManyAndReturn
   */
  export type ProductHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductHistories.
     */
    data: XOR<ProductHistoryUpdateManyMutationInput, ProductHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductHistories to update
     */
    where?: ProductHistoryWhereInput
    /**
     * Limit how many ProductHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductHistory upsert
   */
  export type ProductHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductHistory to update in case it exists.
     */
    where: ProductHistoryWhereUniqueInput
    /**
     * In case the ProductHistory found by the `where` argument doesn't exist, create a new ProductHistory with this data.
     */
    create: XOR<ProductHistoryCreateInput, ProductHistoryUncheckedCreateInput>
    /**
     * In case the ProductHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductHistoryUpdateInput, ProductHistoryUncheckedUpdateInput>
  }

  /**
   * ProductHistory delete
   */
  export type ProductHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProductHistory to delete.
     */
    where: ProductHistoryWhereUniqueInput
  }

  /**
   * ProductHistory deleteMany
   */
  export type ProductHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHistories to delete
     */
    where?: ProductHistoryWhereInput
    /**
     * Limit how many ProductHistories to delete.
     */
    limit?: number
  }

  /**
   * ProductHistory without action
   */
  export type ProductHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHistory
     */
    select?: ProductHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHistory
     */
    omit?: ProductHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CmsPage
   */

  export type AggregateCmsPage = {
    _count: CmsPageCountAggregateOutputType | null
    _avg: CmsPageAvgAggregateOutputType | null
    _sum: CmsPageSumAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  export type CmsPageAvgAggregateOutputType = {
    currentVersion: number | null
  }

  export type CmsPageSumAggregateOutputType = {
    currentVersion: number | null
  }

  export type CmsPageMinAggregateOutputType = {
    id: string | null
    key: string | null
    title: string | null
    slug: string | null
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string | null
    customData: string | null
    isArchived: boolean | null
    currentVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageMaxAggregateOutputType = {
    id: string | null
    key: string | null
    title: string | null
    slug: string | null
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string | null
    customData: string | null
    isArchived: boolean | null
    currentVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageCountAggregateOutputType = {
    id: number
    key: number
    title: number
    slug: number
    seoTitle: number
    metaDescription: number
    bodyHtml: number
    customData: number
    isArchived: number
    currentVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPageAvgAggregateInputType = {
    currentVersion?: true
  }

  export type CmsPageSumAggregateInputType = {
    currentVersion?: true
  }

  export type CmsPageMinAggregateInputType = {
    id?: true
    key?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    isArchived?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageMaxAggregateInputType = {
    id?: true
    key?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    isArchived?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageCountAggregateInputType = {
    id?: true
    key?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    isArchived?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPage to aggregate.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPages
    **/
    _count?: true | CmsPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPageMaxAggregateInputType
  }

  export type GetCmsPageAggregateType<T extends CmsPageAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPage[P]>
      : GetScalarType<T[P], AggregateCmsPage[P]>
  }




  export type CmsPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPageWhereInput
    orderBy?: CmsPageOrderByWithAggregationInput | CmsPageOrderByWithAggregationInput[]
    by: CmsPageScalarFieldEnum[] | CmsPageScalarFieldEnum
    having?: CmsPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPageCountAggregateInputType | true
    _avg?: CmsPageAvgAggregateInputType
    _sum?: CmsPageSumAggregateInputType
    _min?: CmsPageMinAggregateInputType
    _max?: CmsPageMaxAggregateInputType
  }

  export type CmsPageGroupByOutputType = {
    id: string
    key: string
    title: string
    slug: string
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string
    customData: string | null
    isArchived: boolean
    currentVersion: number
    createdAt: Date
    updatedAt: Date
    _count: CmsPageCountAggregateOutputType | null
    _avg: CmsPageAvgAggregateOutputType | null
    _sum: CmsPageSumAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  type GetCmsPageGroupByPayload<T extends CmsPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
        }
      >
    >


  export type CmsPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    isArchived?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    versions?: boolean | CmsPage$versionsArgs<ExtArgs>
    _count?: boolean | CmsPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    isArchived?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    isArchived?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectScalar = {
    id?: boolean
    key?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    isArchived?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "title" | "slug" | "seoTitle" | "metaDescription" | "bodyHtml" | "customData" | "isArchived" | "currentVersion" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPage"]>
  export type CmsPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | CmsPage$versionsArgs<ExtArgs>
    _count?: boolean | CmsPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmsPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmsPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPage"
    objects: {
      versions: Prisma.$CmsPageVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      title: string
      slug: string
      seoTitle: string | null
      metaDescription: string | null
      bodyHtml: string
      customData: string | null
      isArchived: boolean
      currentVersion: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPage"]>
    composites: {}
  }

  type CmsPageGetPayload<S extends boolean | null | undefined | CmsPageDefaultArgs> = $Result.GetResult<Prisma.$CmsPagePayload, S>

  type CmsPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPageCountAggregateInputType | true
    }

  export interface CmsPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPage'], meta: { name: 'CmsPage' } }
    /**
     * Find zero or one CmsPage that matches the filter.
     * @param {CmsPageFindUniqueArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPageFindUniqueArgs>(args: SelectSubset<T, CmsPageFindUniqueArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPageFindUniqueOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPageFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPageFindFirstArgs>(args?: SelectSubset<T, CmsPageFindFirstArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPageFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPages
     * const cmsPages = await prisma.cmsPage.findMany()
     * 
     * // Get first 10 CmsPages
     * const cmsPages = await prisma.cmsPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPageFindManyArgs>(args?: SelectSubset<T, CmsPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPage.
     * @param {CmsPageCreateArgs} args - Arguments to create a CmsPage.
     * @example
     * // Create one CmsPage
     * const CmsPage = await prisma.cmsPage.create({
     *   data: {
     *     // ... data to create a CmsPage
     *   }
     * })
     * 
     */
    create<T extends CmsPageCreateArgs>(args: SelectSubset<T, CmsPageCreateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPages.
     * @param {CmsPageCreateManyArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPageCreateManyArgs>(args?: SelectSubset<T, CmsPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPages and returns the data saved in the database.
     * @param {CmsPageCreateManyAndReturnArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPageCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPage.
     * @param {CmsPageDeleteArgs} args - Arguments to delete one CmsPage.
     * @example
     * // Delete one CmsPage
     * const CmsPage = await prisma.cmsPage.delete({
     *   where: {
     *     // ... filter to delete one CmsPage
     *   }
     * })
     * 
     */
    delete<T extends CmsPageDeleteArgs>(args: SelectSubset<T, CmsPageDeleteArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPage.
     * @param {CmsPageUpdateArgs} args - Arguments to update one CmsPage.
     * @example
     * // Update one CmsPage
     * const cmsPage = await prisma.cmsPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPageUpdateArgs>(args: SelectSubset<T, CmsPageUpdateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPages.
     * @param {CmsPageDeleteManyArgs} args - Arguments to filter CmsPages to delete.
     * @example
     * // Delete a few CmsPages
     * const { count } = await prisma.cmsPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPageDeleteManyArgs>(args?: SelectSubset<T, CmsPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPageUpdateManyArgs>(args: SelectSubset<T, CmsPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages and returns the data updated in the database.
     * @param {CmsPageUpdateManyAndReturnArgs} args - Arguments to update many CmsPages.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsPageUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPage.
     * @param {CmsPageUpsertArgs} args - Arguments to update or create a CmsPage.
     * @example
     * // Update or create a CmsPage
     * const cmsPage = await prisma.cmsPage.upsert({
     *   create: {
     *     // ... data to create a CmsPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPage we want to update
     *   }
     * })
     */
    upsert<T extends CmsPageUpsertArgs>(args: SelectSubset<T, CmsPageUpsertArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageCountArgs} args - Arguments to filter CmsPages to count.
     * @example
     * // Count the number of CmsPages
     * const count = await prisma.cmsPage.count({
     *   where: {
     *     // ... the filter for the CmsPages we want to count
     *   }
     * })
    **/
    count<T extends CmsPageCountArgs>(
      args?: Subset<T, CmsPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsPageAggregateArgs>(args: Subset<T, CmsPageAggregateArgs>): Prisma.PrismaPromise<GetCmsPageAggregateType<T>>

    /**
     * Group by CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPageGroupByArgs['orderBy'] }
        : { orderBy?: CmsPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPage model
   */
  readonly fields: CmsPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends CmsPage$versionsArgs<ExtArgs> = {}>(args?: Subset<T, CmsPage$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsPage model
   */
  interface CmsPageFieldRefs {
    readonly id: FieldRef<"CmsPage", 'String'>
    readonly key: FieldRef<"CmsPage", 'String'>
    readonly title: FieldRef<"CmsPage", 'String'>
    readonly slug: FieldRef<"CmsPage", 'String'>
    readonly seoTitle: FieldRef<"CmsPage", 'String'>
    readonly metaDescription: FieldRef<"CmsPage", 'String'>
    readonly bodyHtml: FieldRef<"CmsPage", 'String'>
    readonly customData: FieldRef<"CmsPage", 'String'>
    readonly isArchived: FieldRef<"CmsPage", 'Boolean'>
    readonly currentVersion: FieldRef<"CmsPage", 'Int'>
    readonly createdAt: FieldRef<"CmsPage", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPage findUnique
   */
  export type CmsPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findUniqueOrThrow
   */
  export type CmsPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findFirst
   */
  export type CmsPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findFirstOrThrow
   */
  export type CmsPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findMany
   */
  export type CmsPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPages to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage create
   */
  export type CmsPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsPage.
     */
    data: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
  }

  /**
   * CmsPage createMany
   */
  export type CmsPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
  }

  /**
   * CmsPage createManyAndReturn
   */
  export type CmsPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
  }

  /**
   * CmsPage update
   */
  export type CmsPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsPage.
     */
    data: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
    /**
     * Choose, which CmsPage to update.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage updateMany
   */
  export type CmsPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage updateManyAndReturn
   */
  export type CmsPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage upsert
   */
  export type CmsPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsPage to update in case it exists.
     */
    where: CmsPageWhereUniqueInput
    /**
     * In case the CmsPage found by the `where` argument doesn't exist, create a new CmsPage with this data.
     */
    create: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
    /**
     * In case the CmsPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
  }

  /**
   * CmsPage delete
   */
  export type CmsPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter which CmsPage to delete.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage deleteMany
   */
  export type CmsPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPages to delete
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to delete.
     */
    limit?: number
  }

  /**
   * CmsPage.versions
   */
  export type CmsPage$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    where?: CmsPageVersionWhereInput
    orderBy?: CmsPageVersionOrderByWithRelationInput | CmsPageVersionOrderByWithRelationInput[]
    cursor?: CmsPageVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsPageVersionScalarFieldEnum | CmsPageVersionScalarFieldEnum[]
  }

  /**
   * CmsPage without action
   */
  export type CmsPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
  }


  /**
   * Model CmsPageVersion
   */

  export type AggregateCmsPageVersion = {
    _count: CmsPageVersionCountAggregateOutputType | null
    _avg: CmsPageVersionAvgAggregateOutputType | null
    _sum: CmsPageVersionSumAggregateOutputType | null
    _min: CmsPageVersionMinAggregateOutputType | null
    _max: CmsPageVersionMaxAggregateOutputType | null
  }

  export type CmsPageVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type CmsPageVersionSumAggregateOutputType = {
    version: number | null
  }

  export type CmsPageVersionMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    version: number | null
    title: string | null
    slug: string | null
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string | null
    customData: string | null
    author: string | null
    createdAt: Date | null
  }

  export type CmsPageVersionMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    version: number | null
    title: string | null
    slug: string | null
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string | null
    customData: string | null
    author: string | null
    createdAt: Date | null
  }

  export type CmsPageVersionCountAggregateOutputType = {
    id: number
    pageId: number
    version: number
    title: number
    slug: number
    seoTitle: number
    metaDescription: number
    bodyHtml: number
    customData: number
    author: number
    createdAt: number
    _all: number
  }


  export type CmsPageVersionAvgAggregateInputType = {
    version?: true
  }

  export type CmsPageVersionSumAggregateInputType = {
    version?: true
  }

  export type CmsPageVersionMinAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    author?: true
    createdAt?: true
  }

  export type CmsPageVersionMaxAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    author?: true
    createdAt?: true
  }

  export type CmsPageVersionCountAggregateInputType = {
    id?: true
    pageId?: true
    version?: true
    title?: true
    slug?: true
    seoTitle?: true
    metaDescription?: true
    bodyHtml?: true
    customData?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type CmsPageVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPageVersion to aggregate.
     */
    where?: CmsPageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPageVersions to fetch.
     */
    orderBy?: CmsPageVersionOrderByWithRelationInput | CmsPageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPageVersions
    **/
    _count?: true | CmsPageVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsPageVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsPageVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPageVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPageVersionMaxAggregateInputType
  }

  export type GetCmsPageVersionAggregateType<T extends CmsPageVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPageVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPageVersion[P]>
      : GetScalarType<T[P], AggregateCmsPageVersion[P]>
  }




  export type CmsPageVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPageVersionWhereInput
    orderBy?: CmsPageVersionOrderByWithAggregationInput | CmsPageVersionOrderByWithAggregationInput[]
    by: CmsPageVersionScalarFieldEnum[] | CmsPageVersionScalarFieldEnum
    having?: CmsPageVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPageVersionCountAggregateInputType | true
    _avg?: CmsPageVersionAvgAggregateInputType
    _sum?: CmsPageVersionSumAggregateInputType
    _min?: CmsPageVersionMinAggregateInputType
    _max?: CmsPageVersionMaxAggregateInputType
  }

  export type CmsPageVersionGroupByOutputType = {
    id: string
    pageId: string
    version: number
    title: string
    slug: string
    seoTitle: string | null
    metaDescription: string | null
    bodyHtml: string
    customData: string | null
    author: string
    createdAt: Date
    _count: CmsPageVersionCountAggregateOutputType | null
    _avg: CmsPageVersionAvgAggregateOutputType | null
    _sum: CmsPageVersionSumAggregateOutputType | null
    _min: CmsPageVersionMinAggregateOutputType | null
    _max: CmsPageVersionMaxAggregateOutputType | null
  }

  type GetCmsPageVersionGroupByPayload<T extends CmsPageVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPageVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPageVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPageVersionGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPageVersionGroupByOutputType[P]>
        }
      >
    >


  export type CmsPageVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    author?: boolean
    createdAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPageVersion"]>

  export type CmsPageVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    author?: boolean
    createdAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPageVersion"]>

  export type CmsPageVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    version?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    author?: boolean
    createdAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPageVersion"]>

  export type CmsPageVersionSelectScalar = {
    id?: boolean
    pageId?: boolean
    version?: boolean
    title?: boolean
    slug?: boolean
    seoTitle?: boolean
    metaDescription?: boolean
    bodyHtml?: boolean
    customData?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type CmsPageVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "version" | "title" | "slug" | "seoTitle" | "metaDescription" | "bodyHtml" | "customData" | "author" | "createdAt", ExtArgs["result"]["cmsPageVersion"]>
  export type CmsPageVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }
  export type CmsPageVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }
  export type CmsPageVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }

  export type $CmsPageVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPageVersion"
    objects: {
      page: Prisma.$CmsPagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      version: number
      title: string
      slug: string
      seoTitle: string | null
      metaDescription: string | null
      bodyHtml: string
      customData: string | null
      author: string
      createdAt: Date
    }, ExtArgs["result"]["cmsPageVersion"]>
    composites: {}
  }

  type CmsPageVersionGetPayload<S extends boolean | null | undefined | CmsPageVersionDefaultArgs> = $Result.GetResult<Prisma.$CmsPageVersionPayload, S>

  type CmsPageVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPageVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPageVersionCountAggregateInputType | true
    }

  export interface CmsPageVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPageVersion'], meta: { name: 'CmsPageVersion' } }
    /**
     * Find zero or one CmsPageVersion that matches the filter.
     * @param {CmsPageVersionFindUniqueArgs} args - Arguments to find a CmsPageVersion
     * @example
     * // Get one CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPageVersionFindUniqueArgs>(args: SelectSubset<T, CmsPageVersionFindUniqueArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPageVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPageVersionFindUniqueOrThrowArgs} args - Arguments to find a CmsPageVersion
     * @example
     * // Get one CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPageVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPageVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPageVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionFindFirstArgs} args - Arguments to find a CmsPageVersion
     * @example
     * // Get one CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPageVersionFindFirstArgs>(args?: SelectSubset<T, CmsPageVersionFindFirstArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPageVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionFindFirstOrThrowArgs} args - Arguments to find a CmsPageVersion
     * @example
     * // Get one CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPageVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPageVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPageVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPageVersions
     * const cmsPageVersions = await prisma.cmsPageVersion.findMany()
     * 
     * // Get first 10 CmsPageVersions
     * const cmsPageVersions = await prisma.cmsPageVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPageVersionWithIdOnly = await prisma.cmsPageVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPageVersionFindManyArgs>(args?: SelectSubset<T, CmsPageVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPageVersion.
     * @param {CmsPageVersionCreateArgs} args - Arguments to create a CmsPageVersion.
     * @example
     * // Create one CmsPageVersion
     * const CmsPageVersion = await prisma.cmsPageVersion.create({
     *   data: {
     *     // ... data to create a CmsPageVersion
     *   }
     * })
     * 
     */
    create<T extends CmsPageVersionCreateArgs>(args: SelectSubset<T, CmsPageVersionCreateArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPageVersions.
     * @param {CmsPageVersionCreateManyArgs} args - Arguments to create many CmsPageVersions.
     * @example
     * // Create many CmsPageVersions
     * const cmsPageVersion = await prisma.cmsPageVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPageVersionCreateManyArgs>(args?: SelectSubset<T, CmsPageVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPageVersions and returns the data saved in the database.
     * @param {CmsPageVersionCreateManyAndReturnArgs} args - Arguments to create many CmsPageVersions.
     * @example
     * // Create many CmsPageVersions
     * const cmsPageVersion = await prisma.cmsPageVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPageVersions and only return the `id`
     * const cmsPageVersionWithIdOnly = await prisma.cmsPageVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPageVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPageVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPageVersion.
     * @param {CmsPageVersionDeleteArgs} args - Arguments to delete one CmsPageVersion.
     * @example
     * // Delete one CmsPageVersion
     * const CmsPageVersion = await prisma.cmsPageVersion.delete({
     *   where: {
     *     // ... filter to delete one CmsPageVersion
     *   }
     * })
     * 
     */
    delete<T extends CmsPageVersionDeleteArgs>(args: SelectSubset<T, CmsPageVersionDeleteArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPageVersion.
     * @param {CmsPageVersionUpdateArgs} args - Arguments to update one CmsPageVersion.
     * @example
     * // Update one CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPageVersionUpdateArgs>(args: SelectSubset<T, CmsPageVersionUpdateArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPageVersions.
     * @param {CmsPageVersionDeleteManyArgs} args - Arguments to filter CmsPageVersions to delete.
     * @example
     * // Delete a few CmsPageVersions
     * const { count } = await prisma.cmsPageVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPageVersionDeleteManyArgs>(args?: SelectSubset<T, CmsPageVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPageVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPageVersions
     * const cmsPageVersion = await prisma.cmsPageVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPageVersionUpdateManyArgs>(args: SelectSubset<T, CmsPageVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPageVersions and returns the data updated in the database.
     * @param {CmsPageVersionUpdateManyAndReturnArgs} args - Arguments to update many CmsPageVersions.
     * @example
     * // Update many CmsPageVersions
     * const cmsPageVersion = await prisma.cmsPageVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPageVersions and only return the `id`
     * const cmsPageVersionWithIdOnly = await prisma.cmsPageVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsPageVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPageVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPageVersion.
     * @param {CmsPageVersionUpsertArgs} args - Arguments to update or create a CmsPageVersion.
     * @example
     * // Update or create a CmsPageVersion
     * const cmsPageVersion = await prisma.cmsPageVersion.upsert({
     *   create: {
     *     // ... data to create a CmsPageVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPageVersion we want to update
     *   }
     * })
     */
    upsert<T extends CmsPageVersionUpsertArgs>(args: SelectSubset<T, CmsPageVersionUpsertArgs<ExtArgs>>): Prisma__CmsPageVersionClient<$Result.GetResult<Prisma.$CmsPageVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPageVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionCountArgs} args - Arguments to filter CmsPageVersions to count.
     * @example
     * // Count the number of CmsPageVersions
     * const count = await prisma.cmsPageVersion.count({
     *   where: {
     *     // ... the filter for the CmsPageVersions we want to count
     *   }
     * })
    **/
    count<T extends CmsPageVersionCountArgs>(
      args?: Subset<T, CmsPageVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPageVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPageVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsPageVersionAggregateArgs>(args: Subset<T, CmsPageVersionAggregateArgs>): Prisma.PrismaPromise<GetCmsPageVersionAggregateType<T>>

    /**
     * Group by CmsPageVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsPageVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPageVersionGroupByArgs['orderBy'] }
        : { orderBy?: CmsPageVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsPageVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPageVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPageVersion model
   */
  readonly fields: CmsPageVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPageVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPageVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends CmsPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsPageDefaultArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsPageVersion model
   */
  interface CmsPageVersionFieldRefs {
    readonly id: FieldRef<"CmsPageVersion", 'String'>
    readonly pageId: FieldRef<"CmsPageVersion", 'String'>
    readonly version: FieldRef<"CmsPageVersion", 'Int'>
    readonly title: FieldRef<"CmsPageVersion", 'String'>
    readonly slug: FieldRef<"CmsPageVersion", 'String'>
    readonly seoTitle: FieldRef<"CmsPageVersion", 'String'>
    readonly metaDescription: FieldRef<"CmsPageVersion", 'String'>
    readonly bodyHtml: FieldRef<"CmsPageVersion", 'String'>
    readonly customData: FieldRef<"CmsPageVersion", 'String'>
    readonly author: FieldRef<"CmsPageVersion", 'String'>
    readonly createdAt: FieldRef<"CmsPageVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPageVersion findUnique
   */
  export type CmsPageVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter, which CmsPageVersion to fetch.
     */
    where: CmsPageVersionWhereUniqueInput
  }

  /**
   * CmsPageVersion findUniqueOrThrow
   */
  export type CmsPageVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter, which CmsPageVersion to fetch.
     */
    where: CmsPageVersionWhereUniqueInput
  }

  /**
   * CmsPageVersion findFirst
   */
  export type CmsPageVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter, which CmsPageVersion to fetch.
     */
    where?: CmsPageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPageVersions to fetch.
     */
    orderBy?: CmsPageVersionOrderByWithRelationInput | CmsPageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPageVersions.
     */
    cursor?: CmsPageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPageVersions.
     */
    distinct?: CmsPageVersionScalarFieldEnum | CmsPageVersionScalarFieldEnum[]
  }

  /**
   * CmsPageVersion findFirstOrThrow
   */
  export type CmsPageVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter, which CmsPageVersion to fetch.
     */
    where?: CmsPageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPageVersions to fetch.
     */
    orderBy?: CmsPageVersionOrderByWithRelationInput | CmsPageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPageVersions.
     */
    cursor?: CmsPageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPageVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPageVersions.
     */
    distinct?: CmsPageVersionScalarFieldEnum | CmsPageVersionScalarFieldEnum[]
  }

  /**
   * CmsPageVersion findMany
   */
  export type CmsPageVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter, which CmsPageVersions to fetch.
     */
    where?: CmsPageVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPageVersions to fetch.
     */
    orderBy?: CmsPageVersionOrderByWithRelationInput | CmsPageVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPageVersions.
     */
    cursor?: CmsPageVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPageVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPageVersions.
     */
    skip?: number
    distinct?: CmsPageVersionScalarFieldEnum | CmsPageVersionScalarFieldEnum[]
  }

  /**
   * CmsPageVersion create
   */
  export type CmsPageVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsPageVersion.
     */
    data: XOR<CmsPageVersionCreateInput, CmsPageVersionUncheckedCreateInput>
  }

  /**
   * CmsPageVersion createMany
   */
  export type CmsPageVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPageVersions.
     */
    data: CmsPageVersionCreateManyInput | CmsPageVersionCreateManyInput[]
  }

  /**
   * CmsPageVersion createManyAndReturn
   */
  export type CmsPageVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPageVersions.
     */
    data: CmsPageVersionCreateManyInput | CmsPageVersionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsPageVersion update
   */
  export type CmsPageVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsPageVersion.
     */
    data: XOR<CmsPageVersionUpdateInput, CmsPageVersionUncheckedUpdateInput>
    /**
     * Choose, which CmsPageVersion to update.
     */
    where: CmsPageVersionWhereUniqueInput
  }

  /**
   * CmsPageVersion updateMany
   */
  export type CmsPageVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPageVersions.
     */
    data: XOR<CmsPageVersionUpdateManyMutationInput, CmsPageVersionUncheckedUpdateManyInput>
    /**
     * Filter which CmsPageVersions to update
     */
    where?: CmsPageVersionWhereInput
    /**
     * Limit how many CmsPageVersions to update.
     */
    limit?: number
  }

  /**
   * CmsPageVersion updateManyAndReturn
   */
  export type CmsPageVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * The data used to update CmsPageVersions.
     */
    data: XOR<CmsPageVersionUpdateManyMutationInput, CmsPageVersionUncheckedUpdateManyInput>
    /**
     * Filter which CmsPageVersions to update
     */
    where?: CmsPageVersionWhereInput
    /**
     * Limit how many CmsPageVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsPageVersion upsert
   */
  export type CmsPageVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsPageVersion to update in case it exists.
     */
    where: CmsPageVersionWhereUniqueInput
    /**
     * In case the CmsPageVersion found by the `where` argument doesn't exist, create a new CmsPageVersion with this data.
     */
    create: XOR<CmsPageVersionCreateInput, CmsPageVersionUncheckedCreateInput>
    /**
     * In case the CmsPageVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPageVersionUpdateInput, CmsPageVersionUncheckedUpdateInput>
  }

  /**
   * CmsPageVersion delete
   */
  export type CmsPageVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
    /**
     * Filter which CmsPageVersion to delete.
     */
    where: CmsPageVersionWhereUniqueInput
  }

  /**
   * CmsPageVersion deleteMany
   */
  export type CmsPageVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPageVersions to delete
     */
    where?: CmsPageVersionWhereInput
    /**
     * Limit how many CmsPageVersions to delete.
     */
    limit?: number
  }

  /**
   * CmsPageVersion without action
   */
  export type CmsPageVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageVersion
     */
    select?: CmsPageVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPageVersion
     */
    omit?: CmsPageVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageVersionInclude<ExtArgs> | null
  }


  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    message: string
    createdAt: Date
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "createdAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'String'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly phone: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model ReturnRequest
   */

  export type AggregateReturnRequest = {
    _count: ReturnRequestCountAggregateOutputType | null
    _min: ReturnRequestMinAggregateOutputType | null
    _max: ReturnRequestMaxAggregateOutputType | null
  }

  export type ReturnRequestMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    fullName: string | null
    email: string | null
    reason: string | null
    details: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ReturnRequestMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    fullName: string | null
    email: string | null
    reason: string | null
    details: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ReturnRequestCountAggregateOutputType = {
    id: number
    orderNumber: number
    fullName: number
    email: number
    reason: number
    details: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReturnRequestMinAggregateInputType = {
    id?: true
    orderNumber?: true
    fullName?: true
    email?: true
    reason?: true
    details?: true
    status?: true
    createdAt?: true
  }

  export type ReturnRequestMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    fullName?: true
    email?: true
    reason?: true
    details?: true
    status?: true
    createdAt?: true
  }

  export type ReturnRequestCountAggregateInputType = {
    id?: true
    orderNumber?: true
    fullName?: true
    email?: true
    reason?: true
    details?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReturnRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnRequest to aggregate.
     */
    where?: ReturnRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRequests to fetch.
     */
    orderBy?: ReturnRequestOrderByWithRelationInput | ReturnRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnRequests
    **/
    _count?: true | ReturnRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnRequestMaxAggregateInputType
  }

  export type GetReturnRequestAggregateType<T extends ReturnRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnRequest[P]>
      : GetScalarType<T[P], AggregateReturnRequest[P]>
  }




  export type ReturnRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnRequestWhereInput
    orderBy?: ReturnRequestOrderByWithAggregationInput | ReturnRequestOrderByWithAggregationInput[]
    by: ReturnRequestScalarFieldEnum[] | ReturnRequestScalarFieldEnum
    having?: ReturnRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnRequestCountAggregateInputType | true
    _min?: ReturnRequestMinAggregateInputType
    _max?: ReturnRequestMaxAggregateInputType
  }

  export type ReturnRequestGroupByOutputType = {
    id: string
    orderNumber: string
    fullName: string
    email: string
    reason: string
    details: string | null
    status: string
    createdAt: Date
    _count: ReturnRequestCountAggregateOutputType | null
    _min: ReturnRequestMinAggregateOutputType | null
    _max: ReturnRequestMaxAggregateOutputType | null
  }

  type GetReturnRequestGroupByPayload<T extends ReturnRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnRequestGroupByOutputType[P]>
        }
      >
    >


  export type ReturnRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    fullName?: boolean
    email?: boolean
    reason?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRequest"]>

  export type ReturnRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    fullName?: boolean
    email?: boolean
    reason?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRequest"]>

  export type ReturnRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    fullName?: boolean
    email?: boolean
    reason?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRequest"]>

  export type ReturnRequestSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    fullName?: boolean
    email?: boolean
    reason?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReturnRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "fullName" | "email" | "reason" | "details" | "status" | "createdAt", ExtArgs["result"]["returnRequest"]>

  export type $ReturnRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      fullName: string
      email: string
      reason: string
      details: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["returnRequest"]>
    composites: {}
  }

  type ReturnRequestGetPayload<S extends boolean | null | undefined | ReturnRequestDefaultArgs> = $Result.GetResult<Prisma.$ReturnRequestPayload, S>

  type ReturnRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReturnRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReturnRequestCountAggregateInputType | true
    }

  export interface ReturnRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnRequest'], meta: { name: 'ReturnRequest' } }
    /**
     * Find zero or one ReturnRequest that matches the filter.
     * @param {ReturnRequestFindUniqueArgs} args - Arguments to find a ReturnRequest
     * @example
     * // Get one ReturnRequest
     * const returnRequest = await prisma.returnRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnRequestFindUniqueArgs>(args: SelectSubset<T, ReturnRequestFindUniqueArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReturnRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReturnRequestFindUniqueOrThrowArgs} args - Arguments to find a ReturnRequest
     * @example
     * // Get one ReturnRequest
     * const returnRequest = await prisma.returnRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestFindFirstArgs} args - Arguments to find a ReturnRequest
     * @example
     * // Get one ReturnRequest
     * const returnRequest = await prisma.returnRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnRequestFindFirstArgs>(args?: SelectSubset<T, ReturnRequestFindFirstArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestFindFirstOrThrowArgs} args - Arguments to find a ReturnRequest
     * @example
     * // Get one ReturnRequest
     * const returnRequest = await prisma.returnRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReturnRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnRequests
     * const returnRequests = await prisma.returnRequest.findMany()
     * 
     * // Get first 10 ReturnRequests
     * const returnRequests = await prisma.returnRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnRequestWithIdOnly = await prisma.returnRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnRequestFindManyArgs>(args?: SelectSubset<T, ReturnRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReturnRequest.
     * @param {ReturnRequestCreateArgs} args - Arguments to create a ReturnRequest.
     * @example
     * // Create one ReturnRequest
     * const ReturnRequest = await prisma.returnRequest.create({
     *   data: {
     *     // ... data to create a ReturnRequest
     *   }
     * })
     * 
     */
    create<T extends ReturnRequestCreateArgs>(args: SelectSubset<T, ReturnRequestCreateArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReturnRequests.
     * @param {ReturnRequestCreateManyArgs} args - Arguments to create many ReturnRequests.
     * @example
     * // Create many ReturnRequests
     * const returnRequest = await prisma.returnRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnRequestCreateManyArgs>(args?: SelectSubset<T, ReturnRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnRequests and returns the data saved in the database.
     * @param {ReturnRequestCreateManyAndReturnArgs} args - Arguments to create many ReturnRequests.
     * @example
     * // Create many ReturnRequests
     * const returnRequest = await prisma.returnRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnRequests and only return the `id`
     * const returnRequestWithIdOnly = await prisma.returnRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReturnRequest.
     * @param {ReturnRequestDeleteArgs} args - Arguments to delete one ReturnRequest.
     * @example
     * // Delete one ReturnRequest
     * const ReturnRequest = await prisma.returnRequest.delete({
     *   where: {
     *     // ... filter to delete one ReturnRequest
     *   }
     * })
     * 
     */
    delete<T extends ReturnRequestDeleteArgs>(args: SelectSubset<T, ReturnRequestDeleteArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReturnRequest.
     * @param {ReturnRequestUpdateArgs} args - Arguments to update one ReturnRequest.
     * @example
     * // Update one ReturnRequest
     * const returnRequest = await prisma.returnRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnRequestUpdateArgs>(args: SelectSubset<T, ReturnRequestUpdateArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReturnRequests.
     * @param {ReturnRequestDeleteManyArgs} args - Arguments to filter ReturnRequests to delete.
     * @example
     * // Delete a few ReturnRequests
     * const { count } = await prisma.returnRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnRequestDeleteManyArgs>(args?: SelectSubset<T, ReturnRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnRequests
     * const returnRequest = await prisma.returnRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnRequestUpdateManyArgs>(args: SelectSubset<T, ReturnRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnRequests and returns the data updated in the database.
     * @param {ReturnRequestUpdateManyAndReturnArgs} args - Arguments to update many ReturnRequests.
     * @example
     * // Update many ReturnRequests
     * const returnRequest = await prisma.returnRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReturnRequests and only return the `id`
     * const returnRequestWithIdOnly = await prisma.returnRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReturnRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ReturnRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReturnRequest.
     * @param {ReturnRequestUpsertArgs} args - Arguments to update or create a ReturnRequest.
     * @example
     * // Update or create a ReturnRequest
     * const returnRequest = await prisma.returnRequest.upsert({
     *   create: {
     *     // ... data to create a ReturnRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnRequest we want to update
     *   }
     * })
     */
    upsert<T extends ReturnRequestUpsertArgs>(args: SelectSubset<T, ReturnRequestUpsertArgs<ExtArgs>>): Prisma__ReturnRequestClient<$Result.GetResult<Prisma.$ReturnRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReturnRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestCountArgs} args - Arguments to filter ReturnRequests to count.
     * @example
     * // Count the number of ReturnRequests
     * const count = await prisma.returnRequest.count({
     *   where: {
     *     // ... the filter for the ReturnRequests we want to count
     *   }
     * })
    **/
    count<T extends ReturnRequestCountArgs>(
      args?: Subset<T, ReturnRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReturnRequestAggregateArgs>(args: Subset<T, ReturnRequestAggregateArgs>): Prisma.PrismaPromise<GetReturnRequestAggregateType<T>>

    /**
     * Group by ReturnRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReturnRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnRequestGroupByArgs['orderBy'] }
        : { orderBy?: ReturnRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReturnRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnRequest model
   */
  readonly fields: ReturnRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReturnRequest model
   */
  interface ReturnRequestFieldRefs {
    readonly id: FieldRef<"ReturnRequest", 'String'>
    readonly orderNumber: FieldRef<"ReturnRequest", 'String'>
    readonly fullName: FieldRef<"ReturnRequest", 'String'>
    readonly email: FieldRef<"ReturnRequest", 'String'>
    readonly reason: FieldRef<"ReturnRequest", 'String'>
    readonly details: FieldRef<"ReturnRequest", 'String'>
    readonly status: FieldRef<"ReturnRequest", 'String'>
    readonly createdAt: FieldRef<"ReturnRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReturnRequest findUnique
   */
  export type ReturnRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRequest to fetch.
     */
    where: ReturnRequestWhereUniqueInput
  }

  /**
   * ReturnRequest findUniqueOrThrow
   */
  export type ReturnRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRequest to fetch.
     */
    where: ReturnRequestWhereUniqueInput
  }

  /**
   * ReturnRequest findFirst
   */
  export type ReturnRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRequest to fetch.
     */
    where?: ReturnRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRequests to fetch.
     */
    orderBy?: ReturnRequestOrderByWithRelationInput | ReturnRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnRequests.
     */
    cursor?: ReturnRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnRequests.
     */
    distinct?: ReturnRequestScalarFieldEnum | ReturnRequestScalarFieldEnum[]
  }

  /**
   * ReturnRequest findFirstOrThrow
   */
  export type ReturnRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRequest to fetch.
     */
    where?: ReturnRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRequests to fetch.
     */
    orderBy?: ReturnRequestOrderByWithRelationInput | ReturnRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnRequests.
     */
    cursor?: ReturnRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnRequests.
     */
    distinct?: ReturnRequestScalarFieldEnum | ReturnRequestScalarFieldEnum[]
  }

  /**
   * ReturnRequest findMany
   */
  export type ReturnRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRequests to fetch.
     */
    where?: ReturnRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRequests to fetch.
     */
    orderBy?: ReturnRequestOrderByWithRelationInput | ReturnRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnRequests.
     */
    cursor?: ReturnRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRequests.
     */
    skip?: number
    distinct?: ReturnRequestScalarFieldEnum | ReturnRequestScalarFieldEnum[]
  }

  /**
   * ReturnRequest create
   */
  export type ReturnRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a ReturnRequest.
     */
    data: XOR<ReturnRequestCreateInput, ReturnRequestUncheckedCreateInput>
  }

  /**
   * ReturnRequest createMany
   */
  export type ReturnRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnRequests.
     */
    data: ReturnRequestCreateManyInput | ReturnRequestCreateManyInput[]
  }

  /**
   * ReturnRequest createManyAndReturn
   */
  export type ReturnRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ReturnRequests.
     */
    data: ReturnRequestCreateManyInput | ReturnRequestCreateManyInput[]
  }

  /**
   * ReturnRequest update
   */
  export type ReturnRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a ReturnRequest.
     */
    data: XOR<ReturnRequestUpdateInput, ReturnRequestUncheckedUpdateInput>
    /**
     * Choose, which ReturnRequest to update.
     */
    where: ReturnRequestWhereUniqueInput
  }

  /**
   * ReturnRequest updateMany
   */
  export type ReturnRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnRequests.
     */
    data: XOR<ReturnRequestUpdateManyMutationInput, ReturnRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReturnRequests to update
     */
    where?: ReturnRequestWhereInput
    /**
     * Limit how many ReturnRequests to update.
     */
    limit?: number
  }

  /**
   * ReturnRequest updateManyAndReturn
   */
  export type ReturnRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * The data used to update ReturnRequests.
     */
    data: XOR<ReturnRequestUpdateManyMutationInput, ReturnRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReturnRequests to update
     */
    where?: ReturnRequestWhereInput
    /**
     * Limit how many ReturnRequests to update.
     */
    limit?: number
  }

  /**
   * ReturnRequest upsert
   */
  export type ReturnRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the ReturnRequest to update in case it exists.
     */
    where: ReturnRequestWhereUniqueInput
    /**
     * In case the ReturnRequest found by the `where` argument doesn't exist, create a new ReturnRequest with this data.
     */
    create: XOR<ReturnRequestCreateInput, ReturnRequestUncheckedCreateInput>
    /**
     * In case the ReturnRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnRequestUpdateInput, ReturnRequestUncheckedUpdateInput>
  }

  /**
   * ReturnRequest delete
   */
  export type ReturnRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
    /**
     * Filter which ReturnRequest to delete.
     */
    where: ReturnRequestWhereUniqueInput
  }

  /**
   * ReturnRequest deleteMany
   */
  export type ReturnRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnRequests to delete
     */
    where?: ReturnRequestWhereInput
    /**
     * Limit how many ReturnRequests to delete.
     */
    limit?: number
  }

  /**
   * ReturnRequest without action
   */
  export type ReturnRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRequest
     */
    select?: ReturnRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRequest
     */
    omit?: ReturnRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    email: 'email',
    phone: 'phone',
    checkoutMode: 'checkoutMode',
    firstName: 'firstName',
    lastName: 'lastName',
    country: 'country',
    city: 'city',
    postalCode: 'postalCode',
    street: 'street',
    houseNumber: 'houseNumber',
    companyName: 'companyName',
    nip: 'nip',
    subtotal: 'subtotal',
    discount: 'discount',
    shipping: 'shipping',
    total: 'total',
    paymentProvider: 'paymentProvider',
    paymentStatus: 'paymentStatus',
    fulfillmentStatus: 'fulfillmentStatus',
    stripeSessionId: 'stripeSessionId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    deliveryMethod: 'deliveryMethod',
    inpostPointId: 'inpostPointId',
    inpostPointName: 'inpostPointName',
    inpostPointAddress: 'inpostPointAddress',
    inpostPointCity: 'inpostPointCity',
    inpostPointPostalCode: 'inpostPointPostalCode',
    shipmentId: 'shipmentId',
    trackingNumber: 'trackingNumber',
    shipmentStatus: 'shipmentStatus',
    labelUrl: 'labelUrl',
    courierCompany: 'courierCompany',
    packageWeight: 'packageWeight',
    packageLength: 'packageLength',
    packageWidth: 'packageWidth',
    packageHeight: 'packageHeight',
    goodsValue: 'goodsValue',
    orderNotes: 'orderNotes',
    adminNotes: 'adminNotes',
    needsAttention: 'needsAttention',
    trackingToken: 'trackingToken',
    appliedCode: 'appliedCode',
    partnerId: 'partnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    variantId: 'variantId',
    size: 'size',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    currency: 'currency',
    image: 'image',
    productName: 'productName'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PromoCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    active: 'active',
    expiration: 'expiration',
    usageLimit: 'usageLimit',
    usageCount: 'usageCount',
    productScope: 'productScope',
    collectionScope: 'collectionScope',
    minimumCartValue: 'minimumCartValue',
    partnerId: 'partnerId'
  };

  export type PromoCodeScalarFieldEnum = (typeof PromoCodeScalarFieldEnum)[keyof typeof PromoCodeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    name: 'name',
    nameEn: 'nameEn',
    slug: 'slug',
    sku: 'sku',
    category: 'category',
    categoryLabel: 'categoryLabel',
    categoryLabelEn: 'categoryLabelEn',
    shortDescription: 'shortDescription',
    shortDescriptionEn: 'shortDescriptionEn',
    description: 'description',
    descriptionEn: 'descriptionEn',
    material: 'material',
    materialEn: 'materialEn',
    details: 'details',
    detailsEn: 'detailsEn',
    price: 'price',
    salePrice: 'salePrice',
    currency: 'currency',
    vatRate: 'vatRate',
    stock: 'stock',
    weight: 'weight',
    width: 'width',
    height: 'height',
    depth: 'depth',
    status: 'status',
    isArchived: 'isArchived',
    deletedAt: 'deletedAt',
    featured: 'featured',
    dropFeatured: 'dropFeatured',
    colors: 'colors',
    sizes: 'sizes',
    seoTitle: 'seoTitle',
    metaDescription: 'metaDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    alt: 'alt',
    position: 'position',
    isThumbnail: 'isThumbnail',
    createdAt: 'createdAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    author: 'author',
    action: 'action',
    snapshot: 'snapshot',
    createdAt: 'createdAt'
  };

  export type ProductHistoryScalarFieldEnum = (typeof ProductHistoryScalarFieldEnum)[keyof typeof ProductHistoryScalarFieldEnum]


  export const CmsPageScalarFieldEnum: {
    id: 'id',
    key: 'key',
    title: 'title',
    slug: 'slug',
    seoTitle: 'seoTitle',
    metaDescription: 'metaDescription',
    bodyHtml: 'bodyHtml',
    customData: 'customData',
    isArchived: 'isArchived',
    currentVersion: 'currentVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPageScalarFieldEnum = (typeof CmsPageScalarFieldEnum)[keyof typeof CmsPageScalarFieldEnum]


  export const CmsPageVersionScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    version: 'version',
    title: 'title',
    slug: 'slug',
    seoTitle: 'seoTitle',
    metaDescription: 'metaDescription',
    bodyHtml: 'bodyHtml',
    customData: 'customData',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type CmsPageVersionScalarFieldEnum = (typeof CmsPageVersionScalarFieldEnum)[keyof typeof CmsPageVersionScalarFieldEnum]


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const ReturnRequestScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    fullName: 'fullName',
    email: 'email',
    reason: 'reason',
    details: 'details',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReturnRequestScalarFieldEnum = (typeof ReturnRequestScalarFieldEnum)[keyof typeof ReturnRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    phone?: StringNullableFilter<"Order"> | string | null
    checkoutMode?: StringFilter<"Order"> | string
    firstName?: StringFilter<"Order"> | string
    lastName?: StringFilter<"Order"> | string
    country?: StringFilter<"Order"> | string
    city?: StringFilter<"Order"> | string
    postalCode?: StringFilter<"Order"> | string
    street?: StringFilter<"Order"> | string
    houseNumber?: StringFilter<"Order"> | string
    companyName?: StringNullableFilter<"Order"> | string | null
    nip?: StringNullableFilter<"Order"> | string | null
    subtotal?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    shipping?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    paymentProvider?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringFilter<"Order"> | string
    fulfillmentStatus?: StringFilter<"Order"> | string
    stripeSessionId?: StringNullableFilter<"Order"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Order"> | string | null
    deliveryMethod?: StringFilter<"Order"> | string
    inpostPointId?: StringNullableFilter<"Order"> | string | null
    inpostPointName?: StringNullableFilter<"Order"> | string | null
    inpostPointAddress?: StringNullableFilter<"Order"> | string | null
    inpostPointCity?: StringNullableFilter<"Order"> | string | null
    inpostPointPostalCode?: StringNullableFilter<"Order"> | string | null
    shipmentId?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    shipmentStatus?: StringNullableFilter<"Order"> | string | null
    labelUrl?: StringNullableFilter<"Order"> | string | null
    courierCompany?: StringFilter<"Order"> | string
    packageWeight?: FloatNullableFilter<"Order"> | number | null
    packageLength?: FloatNullableFilter<"Order"> | number | null
    packageWidth?: FloatNullableFilter<"Order"> | number | null
    packageHeight?: FloatNullableFilter<"Order"> | number | null
    goodsValue?: FloatNullableFilter<"Order"> | number | null
    orderNotes?: StringNullableFilter<"Order"> | string | null
    adminNotes?: StringNullableFilter<"Order"> | string | null
    needsAttention?: BoolFilter<"Order"> | boolean
    trackingToken?: StringFilter<"Order"> | string
    appliedCode?: StringNullableFilter<"Order"> | string | null
    partnerId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    checkoutMode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    companyName?: SortOrderInput | SortOrder
    nip?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    fulfillmentStatus?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    deliveryMethod?: SortOrder
    inpostPointId?: SortOrderInput | SortOrder
    inpostPointName?: SortOrderInput | SortOrder
    inpostPointAddress?: SortOrderInput | SortOrder
    inpostPointCity?: SortOrderInput | SortOrder
    inpostPointPostalCode?: SortOrderInput | SortOrder
    shipmentId?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shipmentStatus?: SortOrderInput | SortOrder
    labelUrl?: SortOrderInput | SortOrder
    courierCompany?: SortOrder
    packageWeight?: SortOrderInput | SortOrder
    packageLength?: SortOrderInput | SortOrder
    packageWidth?: SortOrderInput | SortOrder
    packageHeight?: SortOrderInput | SortOrder
    goodsValue?: SortOrderInput | SortOrder
    orderNotes?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    needsAttention?: SortOrder
    trackingToken?: SortOrder
    appliedCode?: SortOrderInput | SortOrder
    partnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    stripeSessionId?: string
    stripePaymentIntentId?: string
    trackingToken?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    email?: StringFilter<"Order"> | string
    phone?: StringNullableFilter<"Order"> | string | null
    checkoutMode?: StringFilter<"Order"> | string
    firstName?: StringFilter<"Order"> | string
    lastName?: StringFilter<"Order"> | string
    country?: StringFilter<"Order"> | string
    city?: StringFilter<"Order"> | string
    postalCode?: StringFilter<"Order"> | string
    street?: StringFilter<"Order"> | string
    houseNumber?: StringFilter<"Order"> | string
    companyName?: StringNullableFilter<"Order"> | string | null
    nip?: StringNullableFilter<"Order"> | string | null
    subtotal?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    shipping?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    paymentProvider?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringFilter<"Order"> | string
    fulfillmentStatus?: StringFilter<"Order"> | string
    deliveryMethod?: StringFilter<"Order"> | string
    inpostPointId?: StringNullableFilter<"Order"> | string | null
    inpostPointName?: StringNullableFilter<"Order"> | string | null
    inpostPointAddress?: StringNullableFilter<"Order"> | string | null
    inpostPointCity?: StringNullableFilter<"Order"> | string | null
    inpostPointPostalCode?: StringNullableFilter<"Order"> | string | null
    shipmentId?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    shipmentStatus?: StringNullableFilter<"Order"> | string | null
    labelUrl?: StringNullableFilter<"Order"> | string | null
    courierCompany?: StringFilter<"Order"> | string
    packageWeight?: FloatNullableFilter<"Order"> | number | null
    packageLength?: FloatNullableFilter<"Order"> | number | null
    packageWidth?: FloatNullableFilter<"Order"> | number | null
    packageHeight?: FloatNullableFilter<"Order"> | number | null
    goodsValue?: FloatNullableFilter<"Order"> | number | null
    orderNotes?: StringNullableFilter<"Order"> | string | null
    adminNotes?: StringNullableFilter<"Order"> | string | null
    needsAttention?: BoolFilter<"Order"> | boolean
    appliedCode?: StringNullableFilter<"Order"> | string | null
    partnerId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }, "id" | "orderNumber" | "stripeSessionId" | "stripePaymentIntentId" | "trackingToken">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    checkoutMode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    companyName?: SortOrderInput | SortOrder
    nip?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    fulfillmentStatus?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    deliveryMethod?: SortOrder
    inpostPointId?: SortOrderInput | SortOrder
    inpostPointName?: SortOrderInput | SortOrder
    inpostPointAddress?: SortOrderInput | SortOrder
    inpostPointCity?: SortOrderInput | SortOrder
    inpostPointPostalCode?: SortOrderInput | SortOrder
    shipmentId?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shipmentStatus?: SortOrderInput | SortOrder
    labelUrl?: SortOrderInput | SortOrder
    courierCompany?: SortOrder
    packageWeight?: SortOrderInput | SortOrder
    packageLength?: SortOrderInput | SortOrder
    packageWidth?: SortOrderInput | SortOrder
    packageHeight?: SortOrderInput | SortOrder
    goodsValue?: SortOrderInput | SortOrder
    orderNotes?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    needsAttention?: SortOrder
    trackingToken?: SortOrder
    appliedCode?: SortOrderInput | SortOrder
    partnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    email?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    checkoutMode?: StringWithAggregatesFilter<"Order"> | string
    firstName?: StringWithAggregatesFilter<"Order"> | string
    lastName?: StringWithAggregatesFilter<"Order"> | string
    country?: StringWithAggregatesFilter<"Order"> | string
    city?: StringWithAggregatesFilter<"Order"> | string
    postalCode?: StringWithAggregatesFilter<"Order"> | string
    street?: StringWithAggregatesFilter<"Order"> | string
    houseNumber?: StringWithAggregatesFilter<"Order"> | string
    companyName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    nip?: StringNullableWithAggregatesFilter<"Order"> | string | null
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatWithAggregatesFilter<"Order"> | number
    shipping?: FloatWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    paymentProvider?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Order"> | string
    fulfillmentStatus?: StringWithAggregatesFilter<"Order"> | string
    stripeSessionId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryMethod?: StringWithAggregatesFilter<"Order"> | string
    inpostPointId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    inpostPointName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    inpostPointAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    inpostPointCity?: StringNullableWithAggregatesFilter<"Order"> | string | null
    inpostPointPostalCode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shipmentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    trackingNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shipmentStatus?: StringNullableWithAggregatesFilter<"Order"> | string | null
    labelUrl?: StringNullableWithAggregatesFilter<"Order"> | string | null
    courierCompany?: StringWithAggregatesFilter<"Order"> | string
    packageWeight?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    packageLength?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    packageWidth?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    packageHeight?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    goodsValue?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    orderNotes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    adminNotes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    needsAttention?: BoolWithAggregatesFilter<"Order"> | boolean
    trackingToken?: StringWithAggregatesFilter<"Order"> | string
    appliedCode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    partnerId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    size?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    currency?: StringFilter<"OrderItem"> | string
    image?: StringNullableFilter<"OrderItem"> | string | null
    productName?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    image?: SortOrderInput | SortOrder
    productName?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    size?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    currency?: StringFilter<"OrderItem"> | string
    image?: StringNullableFilter<"OrderItem"> | string | null
    productName?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    image?: SortOrderInput | SortOrder
    productName?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    variantId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    size?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    currency?: StringWithAggregatesFilter<"OrderItem"> | string
    image?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    productName?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type PromoCodeWhereInput = {
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    id?: StringFilter<"PromoCode"> | string
    code?: StringFilter<"PromoCode"> | string
    type?: StringFilter<"PromoCode"> | string
    value?: FloatFilter<"PromoCode"> | number
    active?: BoolFilter<"PromoCode"> | boolean
    expiration?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    usageLimit?: IntNullableFilter<"PromoCode"> | number | null
    usageCount?: IntFilter<"PromoCode"> | number
    productScope?: StringNullableFilter<"PromoCode"> | string | null
    collectionScope?: StringNullableFilter<"PromoCode"> | string | null
    minimumCartValue?: FloatNullableFilter<"PromoCode"> | number | null
    partnerId?: StringNullableFilter<"PromoCode"> | string | null
  }

  export type PromoCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    active?: SortOrder
    expiration?: SortOrderInput | SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    productScope?: SortOrderInput | SortOrder
    collectionScope?: SortOrderInput | SortOrder
    minimumCartValue?: SortOrderInput | SortOrder
    partnerId?: SortOrderInput | SortOrder
  }

  export type PromoCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    type?: StringFilter<"PromoCode"> | string
    value?: FloatFilter<"PromoCode"> | number
    active?: BoolFilter<"PromoCode"> | boolean
    expiration?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    usageLimit?: IntNullableFilter<"PromoCode"> | number | null
    usageCount?: IntFilter<"PromoCode"> | number
    productScope?: StringNullableFilter<"PromoCode"> | string | null
    collectionScope?: StringNullableFilter<"PromoCode"> | string | null
    minimumCartValue?: FloatNullableFilter<"PromoCode"> | number | null
    partnerId?: StringNullableFilter<"PromoCode"> | string | null
  }, "id" | "code">

  export type PromoCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    active?: SortOrder
    expiration?: SortOrderInput | SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    productScope?: SortOrderInput | SortOrder
    collectionScope?: SortOrderInput | SortOrder
    minimumCartValue?: SortOrderInput | SortOrder
    partnerId?: SortOrderInput | SortOrder
    _count?: PromoCodeCountOrderByAggregateInput
    _avg?: PromoCodeAvgOrderByAggregateInput
    _max?: PromoCodeMaxOrderByAggregateInput
    _min?: PromoCodeMinOrderByAggregateInput
    _sum?: PromoCodeSumOrderByAggregateInput
  }

  export type PromoCodeScalarWhereWithAggregatesInput = {
    AND?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    OR?: PromoCodeScalarWhereWithAggregatesInput[]
    NOT?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromoCode"> | string
    code?: StringWithAggregatesFilter<"PromoCode"> | string
    type?: StringWithAggregatesFilter<"PromoCode"> | string
    value?: FloatWithAggregatesFilter<"PromoCode"> | number
    active?: BoolWithAggregatesFilter<"PromoCode"> | boolean
    expiration?: DateTimeNullableWithAggregatesFilter<"PromoCode"> | Date | string | null
    usageLimit?: IntNullableWithAggregatesFilter<"PromoCode"> | number | null
    usageCount?: IntWithAggregatesFilter<"PromoCode"> | number
    productScope?: StringNullableWithAggregatesFilter<"PromoCode"> | string | null
    collectionScope?: StringNullableWithAggregatesFilter<"PromoCode"> | string | null
    minimumCartValue?: FloatNullableWithAggregatesFilter<"PromoCode"> | number | null
    partnerId?: StringNullableWithAggregatesFilter<"PromoCode"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    externalId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    nameEn?: StringNullableFilter<"Product"> | string | null
    slug?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    categoryLabel?: StringNullableFilter<"Product"> | string | null
    categoryLabelEn?: StringNullableFilter<"Product"> | string | null
    shortDescription?: StringFilter<"Product"> | string
    shortDescriptionEn?: StringNullableFilter<"Product"> | string | null
    description?: StringFilter<"Product"> | string
    descriptionEn?: StringNullableFilter<"Product"> | string | null
    material?: StringNullableFilter<"Product"> | string | null
    materialEn?: StringNullableFilter<"Product"> | string | null
    details?: StringNullableFilter<"Product"> | string | null
    detailsEn?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    salePrice?: FloatNullableFilter<"Product"> | number | null
    currency?: StringFilter<"Product"> | string
    vatRate?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    weight?: FloatNullableFilter<"Product"> | number | null
    width?: FloatNullableFilter<"Product"> | number | null
    height?: FloatNullableFilter<"Product"> | number | null
    depth?: FloatNullableFilter<"Product"> | number | null
    status?: StringFilter<"Product"> | string
    isArchived?: BoolFilter<"Product"> | boolean
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    featured?: BoolFilter<"Product"> | boolean
    dropFeatured?: BoolFilter<"Product"> | boolean
    colors?: StringNullableFilter<"Product"> | string | null
    sizes?: StringNullableFilter<"Product"> | string | null
    seoTitle?: StringNullableFilter<"Product"> | string | null
    metaDescription?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    images?: ProductImageListRelationFilter
    history?: ProductHistoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    name?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    slug?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    categoryLabel?: SortOrderInput | SortOrder
    categoryLabelEn?: SortOrderInput | SortOrder
    shortDescription?: SortOrder
    shortDescriptionEn?: SortOrderInput | SortOrder
    description?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    materialEn?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    detailsEn?: SortOrderInput | SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    depth?: SortOrderInput | SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    featured?: SortOrder
    dropFeatured?: SortOrder
    colors?: SortOrderInput | SortOrder
    sizes?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ProductImageOrderByRelationAggregateInput
    history?: ProductHistoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    slug?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    nameEn?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    categoryLabel?: StringNullableFilter<"Product"> | string | null
    categoryLabelEn?: StringNullableFilter<"Product"> | string | null
    shortDescription?: StringFilter<"Product"> | string
    shortDescriptionEn?: StringNullableFilter<"Product"> | string | null
    description?: StringFilter<"Product"> | string
    descriptionEn?: StringNullableFilter<"Product"> | string | null
    material?: StringNullableFilter<"Product"> | string | null
    materialEn?: StringNullableFilter<"Product"> | string | null
    details?: StringNullableFilter<"Product"> | string | null
    detailsEn?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    salePrice?: FloatNullableFilter<"Product"> | number | null
    currency?: StringFilter<"Product"> | string
    vatRate?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    weight?: FloatNullableFilter<"Product"> | number | null
    width?: FloatNullableFilter<"Product"> | number | null
    height?: FloatNullableFilter<"Product"> | number | null
    depth?: FloatNullableFilter<"Product"> | number | null
    status?: StringFilter<"Product"> | string
    isArchived?: BoolFilter<"Product"> | boolean
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    featured?: BoolFilter<"Product"> | boolean
    dropFeatured?: BoolFilter<"Product"> | boolean
    colors?: StringNullableFilter<"Product"> | string | null
    sizes?: StringNullableFilter<"Product"> | string | null
    seoTitle?: StringNullableFilter<"Product"> | string | null
    metaDescription?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    images?: ProductImageListRelationFilter
    history?: ProductHistoryListRelationFilter
  }, "id" | "externalId" | "slug" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    name?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    slug?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    categoryLabel?: SortOrderInput | SortOrder
    categoryLabelEn?: SortOrderInput | SortOrder
    shortDescription?: SortOrder
    shortDescriptionEn?: SortOrderInput | SortOrder
    description?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    materialEn?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    detailsEn?: SortOrderInput | SortOrder
    price?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    currency?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    depth?: SortOrderInput | SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    featured?: SortOrder
    dropFeatured?: SortOrder
    colors?: SortOrderInput | SortOrder
    sizes?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    externalId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    nameEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    slug?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    categoryLabel?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryLabelEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    shortDescription?: StringWithAggregatesFilter<"Product"> | string
    shortDescriptionEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringWithAggregatesFilter<"Product"> | string
    descriptionEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    material?: StringNullableWithAggregatesFilter<"Product"> | string | null
    materialEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    details?: StringNullableWithAggregatesFilter<"Product"> | string | null
    detailsEn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    salePrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    currency?: StringWithAggregatesFilter<"Product"> | string
    vatRate?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    weight?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    width?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    height?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    depth?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    status?: StringWithAggregatesFilter<"Product"> | string
    isArchived?: BoolWithAggregatesFilter<"Product"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    featured?: BoolWithAggregatesFilter<"Product"> | boolean
    dropFeatured?: BoolWithAggregatesFilter<"Product"> | boolean
    colors?: StringNullableWithAggregatesFilter<"Product"> | string | null
    sizes?: StringNullableWithAggregatesFilter<"Product"> | string | null
    seoTitle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    alt?: StringNullableFilter<"ProductImage"> | string | null
    position?: IntFilter<"ProductImage"> | number
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    position?: SortOrder
    isThumbnail?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    alt?: StringNullableFilter<"ProductImage"> | string | null
    position?: IntFilter<"ProductImage"> | number
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    position?: SortOrder
    isThumbnail?: SortOrder
    createdAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductImage"> | string
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    alt?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    position?: IntWithAggregatesFilter<"ProductImage"> | number
    isThumbnail?: BoolWithAggregatesFilter<"ProductImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type ProductHistoryWhereInput = {
    AND?: ProductHistoryWhereInput | ProductHistoryWhereInput[]
    OR?: ProductHistoryWhereInput[]
    NOT?: ProductHistoryWhereInput | ProductHistoryWhereInput[]
    id?: StringFilter<"ProductHistory"> | string
    productId?: StringFilter<"ProductHistory"> | string
    author?: StringFilter<"ProductHistory"> | string
    action?: StringFilter<"ProductHistory"> | string
    snapshot?: StringFilter<"ProductHistory"> | string
    createdAt?: DateTimeFilter<"ProductHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    author?: SortOrder
    action?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductHistoryWhereInput | ProductHistoryWhereInput[]
    OR?: ProductHistoryWhereInput[]
    NOT?: ProductHistoryWhereInput | ProductHistoryWhereInput[]
    productId?: StringFilter<"ProductHistory"> | string
    author?: StringFilter<"ProductHistory"> | string
    action?: StringFilter<"ProductHistory"> | string
    snapshot?: StringFilter<"ProductHistory"> | string
    createdAt?: DateTimeFilter<"ProductHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    author?: SortOrder
    action?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    _count?: ProductHistoryCountOrderByAggregateInput
    _max?: ProductHistoryMaxOrderByAggregateInput
    _min?: ProductHistoryMinOrderByAggregateInput
  }

  export type ProductHistoryScalarWhereWithAggregatesInput = {
    AND?: ProductHistoryScalarWhereWithAggregatesInput | ProductHistoryScalarWhereWithAggregatesInput[]
    OR?: ProductHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProductHistoryScalarWhereWithAggregatesInput | ProductHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductHistory"> | string
    productId?: StringWithAggregatesFilter<"ProductHistory"> | string
    author?: StringWithAggregatesFilter<"ProductHistory"> | string
    action?: StringWithAggregatesFilter<"ProductHistory"> | string
    snapshot?: StringWithAggregatesFilter<"ProductHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductHistory"> | Date | string
  }

  export type CmsPageWhereInput = {
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    id?: StringFilter<"CmsPage"> | string
    key?: StringFilter<"CmsPage"> | string
    title?: StringFilter<"CmsPage"> | string
    slug?: StringFilter<"CmsPage"> | string
    seoTitle?: StringNullableFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableFilter<"CmsPage"> | string | null
    bodyHtml?: StringFilter<"CmsPage"> | string
    customData?: StringNullableFilter<"CmsPage"> | string | null
    isArchived?: BoolFilter<"CmsPage"> | boolean
    currentVersion?: IntFilter<"CmsPage"> | number
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
    versions?: CmsPageVersionListRelationFilter
  }

  export type CmsPageOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    versions?: CmsPageVersionOrderByRelationAggregateInput
  }

  export type CmsPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    slug?: string
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    title?: StringFilter<"CmsPage"> | string
    seoTitle?: StringNullableFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableFilter<"CmsPage"> | string | null
    bodyHtml?: StringFilter<"CmsPage"> | string
    customData?: StringNullableFilter<"CmsPage"> | string | null
    isArchived?: BoolFilter<"CmsPage"> | boolean
    currentVersion?: IntFilter<"CmsPage"> | number
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
    versions?: CmsPageVersionListRelationFilter
  }, "id" | "key" | "slug">

  export type CmsPageOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPageCountOrderByAggregateInput
    _avg?: CmsPageAvgOrderByAggregateInput
    _max?: CmsPageMaxOrderByAggregateInput
    _min?: CmsPageMinOrderByAggregateInput
    _sum?: CmsPageSumOrderByAggregateInput
  }

  export type CmsPageScalarWhereWithAggregatesInput = {
    AND?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    OR?: CmsPageScalarWhereWithAggregatesInput[]
    NOT?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsPage"> | string
    key?: StringWithAggregatesFilter<"CmsPage"> | string
    title?: StringWithAggregatesFilter<"CmsPage"> | string
    slug?: StringWithAggregatesFilter<"CmsPage"> | string
    seoTitle?: StringNullableWithAggregatesFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"CmsPage"> | string | null
    bodyHtml?: StringWithAggregatesFilter<"CmsPage"> | string
    customData?: StringNullableWithAggregatesFilter<"CmsPage"> | string | null
    isArchived?: BoolWithAggregatesFilter<"CmsPage"> | boolean
    currentVersion?: IntWithAggregatesFilter<"CmsPage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
  }

  export type CmsPageVersionWhereInput = {
    AND?: CmsPageVersionWhereInput | CmsPageVersionWhereInput[]
    OR?: CmsPageVersionWhereInput[]
    NOT?: CmsPageVersionWhereInput | CmsPageVersionWhereInput[]
    id?: StringFilter<"CmsPageVersion"> | string
    pageId?: StringFilter<"CmsPageVersion"> | string
    version?: IntFilter<"CmsPageVersion"> | number
    title?: StringFilter<"CmsPageVersion"> | string
    slug?: StringFilter<"CmsPageVersion"> | string
    seoTitle?: StringNullableFilter<"CmsPageVersion"> | string | null
    metaDescription?: StringNullableFilter<"CmsPageVersion"> | string | null
    bodyHtml?: StringFilter<"CmsPageVersion"> | string
    customData?: StringNullableFilter<"CmsPageVersion"> | string | null
    author?: StringFilter<"CmsPageVersion"> | string
    createdAt?: DateTimeFilter<"CmsPageVersion"> | Date | string
    page?: XOR<CmsPageScalarRelationFilter, CmsPageWhereInput>
  }

  export type CmsPageVersionOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrderInput | SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    page?: CmsPageOrderByWithRelationInput
  }

  export type CmsPageVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pageId_version?: CmsPageVersionPageIdVersionCompoundUniqueInput
    AND?: CmsPageVersionWhereInput | CmsPageVersionWhereInput[]
    OR?: CmsPageVersionWhereInput[]
    NOT?: CmsPageVersionWhereInput | CmsPageVersionWhereInput[]
    pageId?: StringFilter<"CmsPageVersion"> | string
    version?: IntFilter<"CmsPageVersion"> | number
    title?: StringFilter<"CmsPageVersion"> | string
    slug?: StringFilter<"CmsPageVersion"> | string
    seoTitle?: StringNullableFilter<"CmsPageVersion"> | string | null
    metaDescription?: StringNullableFilter<"CmsPageVersion"> | string | null
    bodyHtml?: StringFilter<"CmsPageVersion"> | string
    customData?: StringNullableFilter<"CmsPageVersion"> | string | null
    author?: StringFilter<"CmsPageVersion"> | string
    createdAt?: DateTimeFilter<"CmsPageVersion"> | Date | string
    page?: XOR<CmsPageScalarRelationFilter, CmsPageWhereInput>
  }, "id" | "pageId_version">

  export type CmsPageVersionOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrderInput | SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    _count?: CmsPageVersionCountOrderByAggregateInput
    _avg?: CmsPageVersionAvgOrderByAggregateInput
    _max?: CmsPageVersionMaxOrderByAggregateInput
    _min?: CmsPageVersionMinOrderByAggregateInput
    _sum?: CmsPageVersionSumOrderByAggregateInput
  }

  export type CmsPageVersionScalarWhereWithAggregatesInput = {
    AND?: CmsPageVersionScalarWhereWithAggregatesInput | CmsPageVersionScalarWhereWithAggregatesInput[]
    OR?: CmsPageVersionScalarWhereWithAggregatesInput[]
    NOT?: CmsPageVersionScalarWhereWithAggregatesInput | CmsPageVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    pageId?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    version?: IntWithAggregatesFilter<"CmsPageVersion"> | number
    title?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    slug?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    seoTitle?: StringNullableWithAggregatesFilter<"CmsPageVersion"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"CmsPageVersion"> | string | null
    bodyHtml?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    customData?: StringNullableWithAggregatesFilter<"CmsPageVersion"> | string | null
    author?: StringWithAggregatesFilter<"CmsPageVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CmsPageVersion"> | Date | string
  }

  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: StringFilter<"ContactSubmission"> | string
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    message?: StringFilter<"ContactSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    message?: StringFilter<"ContactSubmission"> | string
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactSubmission"> | string
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
  }

  export type ReturnRequestWhereInput = {
    AND?: ReturnRequestWhereInput | ReturnRequestWhereInput[]
    OR?: ReturnRequestWhereInput[]
    NOT?: ReturnRequestWhereInput | ReturnRequestWhereInput[]
    id?: StringFilter<"ReturnRequest"> | string
    orderNumber?: StringFilter<"ReturnRequest"> | string
    fullName?: StringFilter<"ReturnRequest"> | string
    email?: StringFilter<"ReturnRequest"> | string
    reason?: StringFilter<"ReturnRequest"> | string
    details?: StringNullableFilter<"ReturnRequest"> | string | null
    status?: StringFilter<"ReturnRequest"> | string
    createdAt?: DateTimeFilter<"ReturnRequest"> | Date | string
  }

  export type ReturnRequestOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reason?: SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReturnRequestWhereInput | ReturnRequestWhereInput[]
    OR?: ReturnRequestWhereInput[]
    NOT?: ReturnRequestWhereInput | ReturnRequestWhereInput[]
    orderNumber?: StringFilter<"ReturnRequest"> | string
    fullName?: StringFilter<"ReturnRequest"> | string
    email?: StringFilter<"ReturnRequest"> | string
    reason?: StringFilter<"ReturnRequest"> | string
    details?: StringNullableFilter<"ReturnRequest"> | string | null
    status?: StringFilter<"ReturnRequest"> | string
    createdAt?: DateTimeFilter<"ReturnRequest"> | Date | string
  }, "id">

  export type ReturnRequestOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reason?: SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReturnRequestCountOrderByAggregateInput
    _max?: ReturnRequestMaxOrderByAggregateInput
    _min?: ReturnRequestMinOrderByAggregateInput
  }

  export type ReturnRequestScalarWhereWithAggregatesInput = {
    AND?: ReturnRequestScalarWhereWithAggregatesInput | ReturnRequestScalarWhereWithAggregatesInput[]
    OR?: ReturnRequestScalarWhereWithAggregatesInput[]
    NOT?: ReturnRequestScalarWhereWithAggregatesInput | ReturnRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReturnRequest"> | string
    orderNumber?: StringWithAggregatesFilter<"ReturnRequest"> | string
    fullName?: StringWithAggregatesFilter<"ReturnRequest"> | string
    email?: StringWithAggregatesFilter<"ReturnRequest"> | string
    reason?: StringWithAggregatesFilter<"ReturnRequest"> | string
    details?: StringNullableWithAggregatesFilter<"ReturnRequest"> | string | null
    status?: StringWithAggregatesFilter<"ReturnRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReturnRequest"> | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    email: string
    phone?: string | null
    checkoutMode?: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName?: string | null
    nip?: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider?: string | null
    paymentStatus?: string
    fulfillmentStatus?: string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    deliveryMethod?: string
    inpostPointId?: string | null
    inpostPointName?: string | null
    inpostPointAddress?: string | null
    inpostPointCity?: string | null
    inpostPointPostalCode?: string | null
    shipmentId?: string | null
    trackingNumber?: string | null
    shipmentStatus?: string | null
    labelUrl?: string | null
    courierCompany?: string
    packageWeight?: number | null
    packageLength?: number | null
    packageWidth?: number | null
    packageHeight?: number | null
    goodsValue?: number | null
    orderNotes?: string | null
    adminNotes?: string | null
    needsAttention?: boolean
    trackingToken?: string
    appliedCode?: string | null
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    email: string
    phone?: string | null
    checkoutMode?: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName?: string | null
    nip?: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider?: string | null
    paymentStatus?: string
    fulfillmentStatus?: string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    deliveryMethod?: string
    inpostPointId?: string | null
    inpostPointName?: string | null
    inpostPointAddress?: string | null
    inpostPointCity?: string | null
    inpostPointPostalCode?: string | null
    shipmentId?: string | null
    trackingNumber?: string | null
    shipmentStatus?: string | null
    labelUrl?: string | null
    courierCompany?: string
    packageWeight?: number | null
    packageLength?: number | null
    packageWidth?: number | null
    packageHeight?: number | null
    goodsValue?: number | null
    orderNotes?: string | null
    adminNotes?: string | null
    needsAttention?: boolean
    trackingToken?: string
    appliedCode?: string | null
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    email: string
    phone?: string | null
    checkoutMode?: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName?: string | null
    nip?: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider?: string | null
    paymentStatus?: string
    fulfillmentStatus?: string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    deliveryMethod?: string
    inpostPointId?: string | null
    inpostPointName?: string | null
    inpostPointAddress?: string | null
    inpostPointCity?: string | null
    inpostPointPostalCode?: string | null
    shipmentId?: string | null
    trackingNumber?: string | null
    shipmentStatus?: string | null
    labelUrl?: string | null
    courierCompany?: string
    packageWeight?: number | null
    packageLength?: number | null
    packageWidth?: number | null
    packageHeight?: number | null
    goodsValue?: number | null
    orderNotes?: string | null
    adminNotes?: string | null
    needsAttention?: boolean
    trackingToken?: string
    appliedCode?: string | null
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type PromoCodeCreateInput = {
    id?: string
    code: string
    type: string
    value: number
    active?: boolean
    expiration?: Date | string | null
    usageLimit?: number | null
    usageCount?: number
    productScope?: string | null
    collectionScope?: string | null
    minimumCartValue?: number | null
    partnerId?: string | null
  }

  export type PromoCodeUncheckedCreateInput = {
    id?: string
    code: string
    type: string
    value: number
    active?: boolean
    expiration?: Date | string | null
    usageLimit?: number | null
    usageCount?: number
    productScope?: string | null
    collectionScope?: string | null
    minimumCartValue?: number | null
    partnerId?: string | null
  }

  export type PromoCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    productScope?: NullableStringFieldUpdateOperationsInput | string | null
    collectionScope?: NullableStringFieldUpdateOperationsInput | string | null
    minimumCartValue?: NullableFloatFieldUpdateOperationsInput | number | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromoCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    productScope?: NullableStringFieldUpdateOperationsInput | string | null
    collectionScope?: NullableStringFieldUpdateOperationsInput | string | null
    minimumCartValue?: NullableFloatFieldUpdateOperationsInput | number | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromoCodeCreateManyInput = {
    id?: string
    code: string
    type: string
    value: number
    active?: boolean
    expiration?: Date | string | null
    usageLimit?: number | null
    usageCount?: number
    productScope?: string | null
    collectionScope?: string | null
    minimumCartValue?: number | null
    partnerId?: string | null
  }

  export type PromoCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    productScope?: NullableStringFieldUpdateOperationsInput | string | null
    collectionScope?: NullableStringFieldUpdateOperationsInput | string | null
    minimumCartValue?: NullableFloatFieldUpdateOperationsInput | number | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromoCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    productScope?: NullableStringFieldUpdateOperationsInput | string | null
    collectionScope?: NullableStringFieldUpdateOperationsInput | string | null
    minimumCartValue?: NullableFloatFieldUpdateOperationsInput | number | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    history?: ProductHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    history?: ProductHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    history?: ProductHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    history?: ProductHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    id?: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: string
    productId: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryCreateInput = {
    id?: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutHistoryInput
  }

  export type ProductHistoryUncheckedCreateInput = {
    id?: string
    productId: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
  }

  export type ProductHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ProductHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryCreateManyInput = {
    id?: string
    productId: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
  }

  export type ProductHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageCreateInput = {
    id?: string
    key: string
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    isArchived?: boolean
    currentVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: CmsPageVersionCreateNestedManyWithoutPageInput
  }

  export type CmsPageUncheckedCreateInput = {
    id?: string
    key: string
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    isArchived?: boolean
    currentVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: CmsPageVersionUncheckedCreateNestedManyWithoutPageInput
  }

  export type CmsPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: CmsPageVersionUpdateManyWithoutPageNestedInput
  }

  export type CmsPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: CmsPageVersionUncheckedUpdateManyWithoutPageNestedInput
  }

  export type CmsPageCreateManyInput = {
    id?: string
    key: string
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    isArchived?: boolean
    currentVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionCreateInput = {
    id?: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
    page: CmsPageCreateNestedOneWithoutVersionsInput
  }

  export type CmsPageVersionUncheckedCreateInput = {
    id?: string
    pageId: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
  }

  export type CmsPageVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: CmsPageUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type CmsPageVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionCreateManyInput = {
    id?: string
    pageId: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
  }

  export type CmsPageVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message: string
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRequestCreateInput = {
    id?: string
    orderNumber: string
    fullName: string
    email: string
    reason: string
    details?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ReturnRequestUncheckedCreateInput = {
    id?: string
    orderNumber: string
    fullName: string
    email: string
    reason: string
    details?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ReturnRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRequestCreateManyInput = {
    id?: string
    orderNumber: string
    fullName: string
    email: string
    reason: string
    details?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ReturnRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    checkoutMode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    companyName?: SortOrder
    nip?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    paymentProvider?: SortOrder
    paymentStatus?: SortOrder
    fulfillmentStatus?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    deliveryMethod?: SortOrder
    inpostPointId?: SortOrder
    inpostPointName?: SortOrder
    inpostPointAddress?: SortOrder
    inpostPointCity?: SortOrder
    inpostPointPostalCode?: SortOrder
    shipmentId?: SortOrder
    trackingNumber?: SortOrder
    shipmentStatus?: SortOrder
    labelUrl?: SortOrder
    courierCompany?: SortOrder
    packageWeight?: SortOrder
    packageLength?: SortOrder
    packageWidth?: SortOrder
    packageHeight?: SortOrder
    goodsValue?: SortOrder
    orderNotes?: SortOrder
    adminNotes?: SortOrder
    needsAttention?: SortOrder
    trackingToken?: SortOrder
    appliedCode?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    packageWeight?: SortOrder
    packageLength?: SortOrder
    packageWidth?: SortOrder
    packageHeight?: SortOrder
    goodsValue?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    checkoutMode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    companyName?: SortOrder
    nip?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    paymentProvider?: SortOrder
    paymentStatus?: SortOrder
    fulfillmentStatus?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    deliveryMethod?: SortOrder
    inpostPointId?: SortOrder
    inpostPointName?: SortOrder
    inpostPointAddress?: SortOrder
    inpostPointCity?: SortOrder
    inpostPointPostalCode?: SortOrder
    shipmentId?: SortOrder
    trackingNumber?: SortOrder
    shipmentStatus?: SortOrder
    labelUrl?: SortOrder
    courierCompany?: SortOrder
    packageWeight?: SortOrder
    packageLength?: SortOrder
    packageWidth?: SortOrder
    packageHeight?: SortOrder
    goodsValue?: SortOrder
    orderNotes?: SortOrder
    adminNotes?: SortOrder
    needsAttention?: SortOrder
    trackingToken?: SortOrder
    appliedCode?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    checkoutMode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    companyName?: SortOrder
    nip?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    paymentProvider?: SortOrder
    paymentStatus?: SortOrder
    fulfillmentStatus?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    deliveryMethod?: SortOrder
    inpostPointId?: SortOrder
    inpostPointName?: SortOrder
    inpostPointAddress?: SortOrder
    inpostPointCity?: SortOrder
    inpostPointPostalCode?: SortOrder
    shipmentId?: SortOrder
    trackingNumber?: SortOrder
    shipmentStatus?: SortOrder
    labelUrl?: SortOrder
    courierCompany?: SortOrder
    packageWeight?: SortOrder
    packageLength?: SortOrder
    packageWidth?: SortOrder
    packageHeight?: SortOrder
    goodsValue?: SortOrder
    orderNotes?: SortOrder
    adminNotes?: SortOrder
    needsAttention?: SortOrder
    trackingToken?: SortOrder
    appliedCode?: SortOrder
    partnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    discount?: SortOrder
    shipping?: SortOrder
    total?: SortOrder
    packageWeight?: SortOrder
    packageLength?: SortOrder
    packageWidth?: SortOrder
    packageHeight?: SortOrder
    goodsValue?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    image?: SortOrder
    productName?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    image?: SortOrder
    productName?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    currency?: SortOrder
    image?: SortOrder
    productName?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PromoCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    active?: SortOrder
    expiration?: SortOrder
    usageLimit?: SortOrder
    usageCount?: SortOrder
    productScope?: SortOrder
    collectionScope?: SortOrder
    minimumCartValue?: SortOrder
    partnerId?: SortOrder
  }

  export type PromoCodeAvgOrderByAggregateInput = {
    value?: SortOrder
    usageLimit?: SortOrder
    usageCount?: SortOrder
    minimumCartValue?: SortOrder
  }

  export type PromoCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    active?: SortOrder
    expiration?: SortOrder
    usageLimit?: SortOrder
    usageCount?: SortOrder
    productScope?: SortOrder
    collectionScope?: SortOrder
    minimumCartValue?: SortOrder
    partnerId?: SortOrder
  }

  export type PromoCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    active?: SortOrder
    expiration?: SortOrder
    usageLimit?: SortOrder
    usageCount?: SortOrder
    productScope?: SortOrder
    collectionScope?: SortOrder
    minimumCartValue?: SortOrder
    partnerId?: SortOrder
  }

  export type PromoCodeSumOrderByAggregateInput = {
    value?: SortOrder
    usageLimit?: SortOrder
    usageCount?: SortOrder
    minimumCartValue?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductHistoryListRelationFilter = {
    every?: ProductHistoryWhereInput
    some?: ProductHistoryWhereInput
    none?: ProductHistoryWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    categoryLabel?: SortOrder
    categoryLabelEn?: SortOrder
    shortDescription?: SortOrder
    shortDescriptionEn?: SortOrder
    description?: SortOrder
    descriptionEn?: SortOrder
    material?: SortOrder
    materialEn?: SortOrder
    details?: SortOrder
    detailsEn?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    currency?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    depth?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    deletedAt?: SortOrder
    featured?: SortOrder
    dropFeatured?: SortOrder
    colors?: SortOrder
    sizes?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    salePrice?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    depth?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    categoryLabel?: SortOrder
    categoryLabelEn?: SortOrder
    shortDescription?: SortOrder
    shortDescriptionEn?: SortOrder
    description?: SortOrder
    descriptionEn?: SortOrder
    material?: SortOrder
    materialEn?: SortOrder
    details?: SortOrder
    detailsEn?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    currency?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    depth?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    deletedAt?: SortOrder
    featured?: SortOrder
    dropFeatured?: SortOrder
    colors?: SortOrder
    sizes?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    nameEn?: SortOrder
    slug?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    categoryLabel?: SortOrder
    categoryLabelEn?: SortOrder
    shortDescription?: SortOrder
    shortDescriptionEn?: SortOrder
    description?: SortOrder
    descriptionEn?: SortOrder
    material?: SortOrder
    materialEn?: SortOrder
    details?: SortOrder
    detailsEn?: SortOrder
    price?: SortOrder
    salePrice?: SortOrder
    currency?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    depth?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    deletedAt?: SortOrder
    featured?: SortOrder
    dropFeatured?: SortOrder
    colors?: SortOrder
    sizes?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    salePrice?: SortOrder
    vatRate?: SortOrder
    stock?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    depth?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isThumbnail?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isThumbnail?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    position?: SortOrder
    isThumbnail?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ProductHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    author?: SortOrder
    action?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    author?: SortOrder
    action?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    author?: SortOrder
    action?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsPageVersionListRelationFilter = {
    every?: CmsPageVersionWhereInput
    some?: CmsPageVersionWhereInput
    none?: CmsPageVersionWhereInput
  }

  export type CmsPageVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsPageCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageAvgOrderByAggregateInput = {
    currentVersion?: SortOrder
  }

  export type CmsPageMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageSumOrderByAggregateInput = {
    currentVersion?: SortOrder
  }

  export type CmsPageScalarRelationFilter = {
    is?: CmsPageWhereInput
    isNot?: CmsPageWhereInput
  }

  export type CmsPageVersionPageIdVersionCompoundUniqueInput = {
    pageId: string
    version: number
  }

  export type CmsPageVersionCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsPageVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type CmsPageVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsPageVersionMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    seoTitle?: SortOrder
    metaDescription?: SortOrder
    bodyHtml?: SortOrder
    customData?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsPageVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRequestCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRequestMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    reason?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput> | ProductHistoryCreateWithoutProductInput[] | ProductHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryCreateOrConnectWithoutProductInput | ProductHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductHistoryCreateManyProductInputEnvelope
    connect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput> | ProductHistoryCreateWithoutProductInput[] | ProductHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryCreateOrConnectWithoutProductInput | ProductHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductHistoryCreateManyProductInputEnvelope
    connect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput> | ProductHistoryCreateWithoutProductInput[] | ProductHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryCreateOrConnectWithoutProductInput | ProductHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductHistoryUpsertWithWhereUniqueWithoutProductInput | ProductHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductHistoryCreateManyProductInputEnvelope
    set?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    disconnect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    delete?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    connect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    update?: ProductHistoryUpdateWithWhereUniqueWithoutProductInput | ProductHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductHistoryUpdateManyWithWhereWithoutProductInput | ProductHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductHistoryScalarWhereInput | ProductHistoryScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput> | ProductHistoryCreateWithoutProductInput[] | ProductHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductHistoryCreateOrConnectWithoutProductInput | ProductHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductHistoryUpsertWithWhereUniqueWithoutProductInput | ProductHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductHistoryCreateManyProductInputEnvelope
    set?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    disconnect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    delete?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    connect?: ProductHistoryWhereUniqueInput | ProductHistoryWhereUniqueInput[]
    update?: ProductHistoryUpdateWithWhereUniqueWithoutProductInput | ProductHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductHistoryUpdateManyWithWhereWithoutProductInput | ProductHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductHistoryScalarWhereInput | ProductHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ProductCreateWithoutHistoryInput, ProductUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutHistoryInput, ProductUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutHistoryInput
    upsert?: ProductUpsertWithoutHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutHistoryInput, ProductUpdateWithoutHistoryInput>, ProductUncheckedUpdateWithoutHistoryInput>
  }

  export type CmsPageVersionCreateNestedManyWithoutPageInput = {
    create?: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput> | CmsPageVersionCreateWithoutPageInput[] | CmsPageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsPageVersionCreateOrConnectWithoutPageInput | CmsPageVersionCreateOrConnectWithoutPageInput[]
    createMany?: CmsPageVersionCreateManyPageInputEnvelope
    connect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
  }

  export type CmsPageVersionUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput> | CmsPageVersionCreateWithoutPageInput[] | CmsPageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsPageVersionCreateOrConnectWithoutPageInput | CmsPageVersionCreateOrConnectWithoutPageInput[]
    createMany?: CmsPageVersionCreateManyPageInputEnvelope
    connect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
  }

  export type CmsPageVersionUpdateManyWithoutPageNestedInput = {
    create?: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput> | CmsPageVersionCreateWithoutPageInput[] | CmsPageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsPageVersionCreateOrConnectWithoutPageInput | CmsPageVersionCreateOrConnectWithoutPageInput[]
    upsert?: CmsPageVersionUpsertWithWhereUniqueWithoutPageInput | CmsPageVersionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: CmsPageVersionCreateManyPageInputEnvelope
    set?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    disconnect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    delete?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    connect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    update?: CmsPageVersionUpdateWithWhereUniqueWithoutPageInput | CmsPageVersionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: CmsPageVersionUpdateManyWithWhereWithoutPageInput | CmsPageVersionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: CmsPageVersionScalarWhereInput | CmsPageVersionScalarWhereInput[]
  }

  export type CmsPageVersionUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput> | CmsPageVersionCreateWithoutPageInput[] | CmsPageVersionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsPageVersionCreateOrConnectWithoutPageInput | CmsPageVersionCreateOrConnectWithoutPageInput[]
    upsert?: CmsPageVersionUpsertWithWhereUniqueWithoutPageInput | CmsPageVersionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: CmsPageVersionCreateManyPageInputEnvelope
    set?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    disconnect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    delete?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    connect?: CmsPageVersionWhereUniqueInput | CmsPageVersionWhereUniqueInput[]
    update?: CmsPageVersionUpdateWithWhereUniqueWithoutPageInput | CmsPageVersionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: CmsPageVersionUpdateManyWithWhereWithoutPageInput | CmsPageVersionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: CmsPageVersionScalarWhereInput | CmsPageVersionScalarWhereInput[]
  }

  export type CmsPageCreateNestedOneWithoutVersionsInput = {
    create?: XOR<CmsPageCreateWithoutVersionsInput, CmsPageUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: CmsPageCreateOrConnectWithoutVersionsInput
    connect?: CmsPageWhereUniqueInput
  }

  export type CmsPageUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<CmsPageCreateWithoutVersionsInput, CmsPageUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: CmsPageCreateOrConnectWithoutVersionsInput
    upsert?: CmsPageUpsertWithoutVersionsInput
    connect?: CmsPageWhereUniqueInput
    update?: XOR<XOR<CmsPageUpdateToOneWithWhereWithoutVersionsInput, CmsPageUpdateWithoutVersionsInput>, CmsPageUncheckedUpdateWithoutVersionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    variantId?: StringNullableFilter<"OrderItem"> | string | null
    size?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    currency?: StringFilter<"OrderItem"> | string
    image?: StringNullableFilter<"OrderItem"> | string | null
    productName?: StringFilter<"OrderItem"> | string
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    email: string
    phone?: string | null
    checkoutMode?: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName?: string | null
    nip?: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider?: string | null
    paymentStatus?: string
    fulfillmentStatus?: string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    deliveryMethod?: string
    inpostPointId?: string | null
    inpostPointName?: string | null
    inpostPointAddress?: string | null
    inpostPointCity?: string | null
    inpostPointPostalCode?: string | null
    shipmentId?: string | null
    trackingNumber?: string | null
    shipmentStatus?: string | null
    labelUrl?: string | null
    courierCompany?: string
    packageWeight?: number | null
    packageLength?: number | null
    packageWidth?: number | null
    packageHeight?: number | null
    goodsValue?: number | null
    orderNotes?: string | null
    adminNotes?: string | null
    needsAttention?: boolean
    trackingToken?: string
    appliedCode?: string | null
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    email: string
    phone?: string | null
    checkoutMode?: string
    firstName: string
    lastName: string
    country: string
    city: string
    postalCode: string
    street: string
    houseNumber: string
    companyName?: string | null
    nip?: string | null
    subtotal: number
    discount: number
    shipping: number
    total: number
    paymentProvider?: string | null
    paymentStatus?: string
    fulfillmentStatus?: string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    deliveryMethod?: string
    inpostPointId?: string | null
    inpostPointName?: string | null
    inpostPointAddress?: string | null
    inpostPointCity?: string | null
    inpostPointPostalCode?: string | null
    shipmentId?: string | null
    trackingNumber?: string | null
    shipmentStatus?: string | null
    labelUrl?: string | null
    courierCompany?: string
    packageWeight?: number | null
    packageLength?: number | null
    packageWidth?: number | null
    packageHeight?: number | null
    goodsValue?: number | null
    orderNotes?: string | null
    adminNotes?: string | null
    needsAttention?: boolean
    trackingToken?: string
    appliedCode?: string | null
    partnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutMode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    fulfillmentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryMethod?: StringFieldUpdateOperationsInput | string
    inpostPointId?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointName?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointAddress?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointCity?: NullableStringFieldUpdateOperationsInput | string | null
    inpostPointPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    labelUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courierCompany?: StringFieldUpdateOperationsInput | string
    packageWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    packageLength?: NullableFloatFieldUpdateOperationsInput | number | null
    packageWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    packageHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    goodsValue?: NullableFloatFieldUpdateOperationsInput | number | null
    orderNotes?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    needsAttention?: BoolFieldUpdateOperationsInput | boolean
    trackingToken?: StringFieldUpdateOperationsInput | string
    appliedCode?: NullableStringFieldUpdateOperationsInput | string | null
    partnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
  }

  export type ProductHistoryCreateWithoutProductInput = {
    id?: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
  }

  export type ProductHistoryUncheckedCreateWithoutProductInput = {
    id?: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
  }

  export type ProductHistoryCreateOrConnectWithoutProductInput = {
    where: ProductHistoryWhereUniqueInput
    create: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductHistoryCreateManyProductInputEnvelope = {
    data: ProductHistoryCreateManyProductInput | ProductHistoryCreateManyProductInput[]
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: StringFilter<"ProductImage"> | string
    productId?: StringFilter<"ProductImage"> | string
    url?: StringFilter<"ProductImage"> | string
    alt?: StringNullableFilter<"ProductImage"> | string | null
    position?: IntFilter<"ProductImage"> | number
    isThumbnail?: BoolFilter<"ProductImage"> | boolean
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type ProductHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductHistoryWhereUniqueInput
    update: XOR<ProductHistoryUpdateWithoutProductInput, ProductHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductHistoryCreateWithoutProductInput, ProductHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductHistoryWhereUniqueInput
    data: XOR<ProductHistoryUpdateWithoutProductInput, ProductHistoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductHistoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductHistoryScalarWhereInput
    data: XOR<ProductHistoryUpdateManyMutationInput, ProductHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductHistoryScalarWhereInput = {
    AND?: ProductHistoryScalarWhereInput | ProductHistoryScalarWhereInput[]
    OR?: ProductHistoryScalarWhereInput[]
    NOT?: ProductHistoryScalarWhereInput | ProductHistoryScalarWhereInput[]
    id?: StringFilter<"ProductHistory"> | string
    productId?: StringFilter<"ProductHistory"> | string
    author?: StringFilter<"ProductHistory"> | string
    action?: StringFilter<"ProductHistory"> | string
    snapshot?: StringFilter<"ProductHistory"> | string
    createdAt?: DateTimeFilter<"ProductHistory"> | Date | string
  }

  export type ProductCreateWithoutImagesInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ProductHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ProductHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ProductHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ProductHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutHistoryInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutHistoryInput = {
    id?: string
    externalId?: string | null
    name: string
    nameEn?: string | null
    slug: string
    sku: string
    category: string
    categoryLabel?: string | null
    categoryLabelEn?: string | null
    shortDescription: string
    shortDescriptionEn?: string | null
    description: string
    descriptionEn?: string | null
    material?: string | null
    materialEn?: string | null
    details?: string | null
    detailsEn?: string | null
    price: number
    salePrice?: number | null
    currency?: string
    vatRate?: number
    stock?: number
    weight?: number | null
    width?: number | null
    height?: number | null
    depth?: number | null
    status?: string
    isArchived?: boolean
    deletedAt?: Date | string | null
    featured?: boolean
    dropFeatured?: boolean
    colors?: string | null
    sizes?: string | null
    seoTitle?: string | null
    metaDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutHistoryInput, ProductUncheckedCreateWithoutHistoryInput>
  }

  export type ProductUpsertWithoutHistoryInput = {
    update: XOR<ProductUpdateWithoutHistoryInput, ProductUncheckedUpdateWithoutHistoryInput>
    create: XOR<ProductCreateWithoutHistoryInput, ProductUncheckedCreateWithoutHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutHistoryInput, ProductUncheckedUpdateWithoutHistoryInput>
  }

  export type ProductUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categoryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    categoryLabelEn?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: StringFieldUpdateOperationsInput | string
    shortDescriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    materialEn?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    detailsEn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    vatRate?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    depth?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    dropFeatured?: BoolFieldUpdateOperationsInput | boolean
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    sizes?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CmsPageVersionCreateWithoutPageInput = {
    id?: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
  }

  export type CmsPageVersionUncheckedCreateWithoutPageInput = {
    id?: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
  }

  export type CmsPageVersionCreateOrConnectWithoutPageInput = {
    where: CmsPageVersionWhereUniqueInput
    create: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput>
  }

  export type CmsPageVersionCreateManyPageInputEnvelope = {
    data: CmsPageVersionCreateManyPageInput | CmsPageVersionCreateManyPageInput[]
  }

  export type CmsPageVersionUpsertWithWhereUniqueWithoutPageInput = {
    where: CmsPageVersionWhereUniqueInput
    update: XOR<CmsPageVersionUpdateWithoutPageInput, CmsPageVersionUncheckedUpdateWithoutPageInput>
    create: XOR<CmsPageVersionCreateWithoutPageInput, CmsPageVersionUncheckedCreateWithoutPageInput>
  }

  export type CmsPageVersionUpdateWithWhereUniqueWithoutPageInput = {
    where: CmsPageVersionWhereUniqueInput
    data: XOR<CmsPageVersionUpdateWithoutPageInput, CmsPageVersionUncheckedUpdateWithoutPageInput>
  }

  export type CmsPageVersionUpdateManyWithWhereWithoutPageInput = {
    where: CmsPageVersionScalarWhereInput
    data: XOR<CmsPageVersionUpdateManyMutationInput, CmsPageVersionUncheckedUpdateManyWithoutPageInput>
  }

  export type CmsPageVersionScalarWhereInput = {
    AND?: CmsPageVersionScalarWhereInput | CmsPageVersionScalarWhereInput[]
    OR?: CmsPageVersionScalarWhereInput[]
    NOT?: CmsPageVersionScalarWhereInput | CmsPageVersionScalarWhereInput[]
    id?: StringFilter<"CmsPageVersion"> | string
    pageId?: StringFilter<"CmsPageVersion"> | string
    version?: IntFilter<"CmsPageVersion"> | number
    title?: StringFilter<"CmsPageVersion"> | string
    slug?: StringFilter<"CmsPageVersion"> | string
    seoTitle?: StringNullableFilter<"CmsPageVersion"> | string | null
    metaDescription?: StringNullableFilter<"CmsPageVersion"> | string | null
    bodyHtml?: StringFilter<"CmsPageVersion"> | string
    customData?: StringNullableFilter<"CmsPageVersion"> | string | null
    author?: StringFilter<"CmsPageVersion"> | string
    createdAt?: DateTimeFilter<"CmsPageVersion"> | Date | string
  }

  export type CmsPageCreateWithoutVersionsInput = {
    id?: string
    key: string
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    isArchived?: boolean
    currentVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUncheckedCreateWithoutVersionsInput = {
    id?: string
    key: string
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    isArchived?: boolean
    currentVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageCreateOrConnectWithoutVersionsInput = {
    where: CmsPageWhereUniqueInput
    create: XOR<CmsPageCreateWithoutVersionsInput, CmsPageUncheckedCreateWithoutVersionsInput>
  }

  export type CmsPageUpsertWithoutVersionsInput = {
    update: XOR<CmsPageUpdateWithoutVersionsInput, CmsPageUncheckedUpdateWithoutVersionsInput>
    create: XOR<CmsPageCreateWithoutVersionsInput, CmsPageUncheckedCreateWithoutVersionsInput>
    where?: CmsPageWhereInput
  }

  export type CmsPageUpdateToOneWithWhereWithoutVersionsInput = {
    where?: CmsPageWhereInput
    data: XOR<CmsPageUpdateWithoutVersionsInput, CmsPageUncheckedUpdateWithoutVersionsInput>
  }

  export type CmsPageUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    currentVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    variantId?: string | null
    size?: string | null
    quantity: number
    unitPrice: number
    currency?: string
    image?: string | null
    productName: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    url: string
    alt?: string | null
    position?: number
    isThumbnail?: boolean
    createdAt?: Date | string
  }

  export type ProductHistoryCreateManyProductInput = {
    id?: string
    author: string
    action: string
    snapshot: string
    createdAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    isThumbnail?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionCreateManyPageInput = {
    id?: string
    version: number
    title: string
    slug: string
    seoTitle?: string | null
    metaDescription?: string | null
    bodyHtml: string
    customData?: string | null
    author: string
    createdAt?: Date | string
  }

  export type CmsPageVersionUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageVersionUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    bodyHtml?: StringFieldUpdateOperationsInput | string
    customData?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}