/**
 * @flow
 */

// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import type { DocumentNode } from "graphql";
import type { BasePrismaOptions as BPOType } from "prisma-client-lib";
import { makePrismaClientClass, Model } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type NodePromise = Promise<Node>;

export type AtLeastOne<T> = $Shape<T>;

export interface Exists {
  book(where?: BookWhereInput): Promise<boolean>;
  review(where?: ReviewWhereInput): Promise<boolean>;
  user(where?: UserWhereInput): Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface PrismaInterface {
  $exists: Exists;
  $graphql: <T: any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  book: (where: BookWhereUniqueInput) => BookPromise;
  books: (args?: {
    where?: BookWhereInput,
    orderBy?: BookOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => FragmentableArray<Book>;
  booksConnection: (args?: {
    where?: BookWhereInput,
    orderBy?: BookOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => BookConnectionPromise;
  review: (where: ReviewWhereUniqueInput) => ReviewPromise;
  reviews: (args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => FragmentableArray<Review>;
  reviewsConnection: (args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => ReviewConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (args: {
    data: BookUpdateInput,
    where: BookWhereUniqueInput
  }) => BookPromise;
  updateManyBooks: (args: {
    data: BookUpdateManyMutationInput,
    where?: BookWhereInput
  }) => BatchPayloadPromise;
  upsertBook: (args: {
    where: BookWhereUniqueInput,
    create: BookCreateInput,
    update: BookUpdateInput
  }) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;
  createReview: (data: ReviewCreateInput) => ReviewPromise;
  updateReview: (args: {
    data: ReviewUpdateInput,
    where: ReviewWhereUniqueInput
  }) => ReviewPromise;
  updateManyReviews: (args: {
    data: ReviewUpdateManyMutationInput,
    where?: ReviewWhereInput
  }) => BatchPayloadPromise;
  upsertReview: (args: {
    where: ReviewWhereUniqueInput,
    create: ReviewCreateInput,
    update: ReviewUpdateInput
  }) => ReviewPromise;
  deleteReview: (where: ReviewWhereUniqueInput) => ReviewPromise;
  deleteManyReviews: (where?: ReviewWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput,
    where: UserWhereUniqueInput
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput,
    where?: UserWhereInput
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput,
    create: UserCreateInput,
    update: UserUpdateInput
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
  review: (
    where?: ReviewSubscriptionWhereInput
  ) => ReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export type ClientConstructor<T> = (options?: BPOType) => T;

/**
 * Types
 */

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "rating_ASC"
  | "rating_DESC";

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC"
  | "isbn_ASC"
  | "isbn_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserUpdateOneRequiredWithoutReviewsInput = {
  create?: UserCreateWithoutReviewsInput,
  update?: UserUpdateWithoutReviewsDataInput,
  upsert?: UserUpsertWithoutReviewsInput,
  connect?: UserWhereUniqueInput
};

export type BookWhereUniqueInput = {
  id?: ID_Input
};

export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
  where: ReviewWhereUniqueInput,
  update: ReviewUpdateWithoutBookDataInput,
  create: ReviewCreateWithoutBookInput
};

export type BookWhereInput = {
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: ID_Input[],
  id_not_in?: ID_Input[],
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  title?: String,
  title_not?: String,
  title_in?: String[],
  title_not_in?: String[],
  title_lt?: String,
  title_lte?: String,
  title_gt?: String,
  title_gte?: String,
  title_contains?: String,
  title_not_contains?: String,
  title_starts_with?: String,
  title_not_starts_with?: String,
  title_ends_with?: String,
  title_not_ends_with?: String,
  author?: String,
  author_not?: String,
  author_in?: String[],
  author_not_in?: String[],
  author_lt?: String,
  author_lte?: String,
  author_gt?: String,
  author_gte?: String,
  author_contains?: String,
  author_not_contains?: String,
  author_starts_with?: String,
  author_not_starts_with?: String,
  author_ends_with?: String,
  author_not_ends_with?: String,
  isbn?: String,
  isbn_not?: String,
  isbn_in?: String[],
  isbn_not_in?: String[],
  isbn_lt?: String,
  isbn_lte?: String,
  isbn_gt?: String,
  isbn_gte?: String,
  isbn_contains?: String,
  isbn_not_contains?: String,
  isbn_starts_with?: String,
  isbn_not_starts_with?: String,
  isbn_ends_with?: String,
  isbn_not_ends_with?: String,
  reviews_every?: ReviewWhereInput,
  reviews_some?: ReviewWhereInput,
  reviews_none?: ReviewWhereInput,
  AND?: BookWhereInput[],
  OR?: BookWhereInput[],
  NOT?: BookWhereInput[]
};

export type ReviewCreateWithoutBookInput = {
  text?: String,
  rating: Int,
  author: UserCreateOneWithoutReviewsInput
};

export type BookCreateWithoutReviewsInput = {
  title: String,
  author: String,
  isbn: String
};

export type UserCreateOneWithoutReviewsInput = {
  create?: UserCreateWithoutReviewsInput,
  connect?: UserWhereUniqueInput
};

export type ReviewScalarWhereInput = {
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: ID_Input[],
  id_not_in?: ID_Input[],
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  text?: String,
  text_not?: String,
  text_in?: String[],
  text_not_in?: String[],
  text_lt?: String,
  text_lte?: String,
  text_gt?: String,
  text_gte?: String,
  text_contains?: String,
  text_not_contains?: String,
  text_starts_with?: String,
  text_not_starts_with?: String,
  text_ends_with?: String,
  text_not_ends_with?: String,
  rating?: Int,
  rating_not?: Int,
  rating_in?: Int[],
  rating_not_in?: Int[],
  rating_lt?: Int,
  rating_lte?: Int,
  rating_gt?: Int,
  rating_gte?: Int,
  AND?: ReviewScalarWhereInput[],
  OR?: ReviewScalarWhereInput[],
  NOT?: ReviewScalarWhereInput[]
};

export type UserCreateWithoutReviewsInput = {
  username: String
};

export type ReviewWhereInput = {
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: ID_Input[],
  id_not_in?: ID_Input[],
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  text?: String,
  text_not?: String,
  text_in?: String[],
  text_not_in?: String[],
  text_lt?: String,
  text_lte?: String,
  text_gt?: String,
  text_gte?: String,
  text_contains?: String,
  text_not_contains?: String,
  text_starts_with?: String,
  text_not_starts_with?: String,
  text_ends_with?: String,
  text_not_ends_with?: String,
  rating?: Int,
  rating_not?: Int,
  rating_in?: Int[],
  rating_not_in?: Int[],
  rating_lt?: Int,
  rating_lte?: Int,
  rating_gt?: Int,
  rating_gte?: Int,
  book?: BookWhereInput,
  author?: UserWhereInput,
  AND?: ReviewWhereInput[],
  OR?: ReviewWhereInput[],
  NOT?: ReviewWhereInput[]
};

export type BookUpdateInput = {
  title?: String,
  author?: String,
  isbn?: String,
  reviews?: ReviewUpdateManyWithoutBookInput
};

export type BookSubscriptionWhereInput = {
  mutation_in?: MutationType[],
  updatedFields_contains?: String,
  updatedFields_contains_every?: String[],
  updatedFields_contains_some?: String[],
  node?: BookWhereInput,
  AND?: BookSubscriptionWhereInput[],
  OR?: BookSubscriptionWhereInput[],
  NOT?: BookSubscriptionWhereInput[]
};

export type ReviewUpdateManyWithoutBookInput = {
  create?: ReviewCreateWithoutBookInput[],
  delete?: ReviewWhereUniqueInput[],
  connect?: ReviewWhereUniqueInput[],
  set?: ReviewWhereUniqueInput[],
  disconnect?: ReviewWhereUniqueInput[],
  update?: ReviewUpdateWithWhereUniqueWithoutBookInput[],
  upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput[],
  deleteMany?: ReviewScalarWhereInput[],
  updateMany?: ReviewUpdateManyWithWhereNestedInput[]
};

export type ReviewUpsertWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput,
  update: ReviewUpdateWithoutAuthorDataInput,
  create: ReviewCreateWithoutAuthorInput
};

export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
  where: ReviewWhereUniqueInput,
  data: ReviewUpdateWithoutBookDataInput
};

export type ReviewWhereUniqueInput = {
  id?: ID_Input
};

export type ReviewUpdateWithoutBookDataInput = {
  text?: String,
  rating?: Int,
  author?: UserUpdateOneRequiredWithoutReviewsInput
};

export type ReviewUpdateManyWithoutAuthorInput = {
  create?: ReviewCreateWithoutAuthorInput[],
  delete?: ReviewWhereUniqueInput[],
  connect?: ReviewWhereUniqueInput[],
  set?: ReviewWhereUniqueInput[],
  disconnect?: ReviewWhereUniqueInput[],
  update?: ReviewUpdateWithWhereUniqueWithoutAuthorInput[],
  upsert?: ReviewUpsertWithWhereUniqueWithoutAuthorInput[],
  deleteMany?: ReviewScalarWhereInput[],
  updateMany?: ReviewUpdateManyWithWhereNestedInput[]
};

export type BookUpsertWithoutReviewsInput = {
  update: BookUpdateWithoutReviewsDataInput,
  create: BookCreateWithoutReviewsInput
};

export type UserWhereUniqueInput = {
  id?: ID_Input,
  username?: String
};

export type UserUpdateWithoutReviewsDataInput = {
  username?: String
};

export type ReviewCreateManyWithoutAuthorInput = {
  create?: ReviewCreateWithoutAuthorInput[],
  connect?: ReviewWhereUniqueInput[]
};

export type UserUpsertWithoutReviewsInput = {
  update: UserUpdateWithoutReviewsDataInput,
  create: UserCreateWithoutReviewsInput
};

export type ReviewUpdateManyMutationInput = {
  text?: String,
  rating?: Int
};

export type UserWhereInput = {
  id?: ID_Input,
  id_not?: ID_Input,
  id_in?: ID_Input[],
  id_not_in?: ID_Input[],
  id_lt?: ID_Input,
  id_lte?: ID_Input,
  id_gt?: ID_Input,
  id_gte?: ID_Input,
  id_contains?: ID_Input,
  id_not_contains?: ID_Input,
  id_starts_with?: ID_Input,
  id_not_starts_with?: ID_Input,
  id_ends_with?: ID_Input,
  id_not_ends_with?: ID_Input,
  username?: String,
  username_not?: String,
  username_in?: String[],
  username_not_in?: String[],
  username_lt?: String,
  username_lte?: String,
  username_gt?: String,
  username_gte?: String,
  username_contains?: String,
  username_not_contains?: String,
  username_starts_with?: String,
  username_not_starts_with?: String,
  username_ends_with?: String,
  username_not_ends_with?: String,
  reviews_every?: ReviewWhereInput,
  reviews_some?: ReviewWhereInput,
  reviews_none?: ReviewWhereInput,
  AND?: UserWhereInput[],
  OR?: UserWhereInput[],
  NOT?: UserWhereInput[]
};

export type BookCreateInput = {
  title: String,
  author: String,
  isbn: String,
  reviews?: ReviewCreateManyWithoutBookInput
};

export type BookUpdateWithoutReviewsDataInput = {
  title?: String,
  author?: String,
  isbn?: String
};

export type UserSubscriptionWhereInput = {
  mutation_in?: MutationType[],
  updatedFields_contains?: String,
  updatedFields_contains_every?: String[],
  updatedFields_contains_some?: String[],
  node?: UserWhereInput,
  AND?: UserSubscriptionWhereInput[],
  OR?: UserSubscriptionWhereInput[],
  NOT?: UserSubscriptionWhereInput[]
};

export type ReviewUpdateManyWithWhereNestedInput = {
  where: ReviewScalarWhereInput,
  data: ReviewUpdateManyDataInput
};

export type UserUpdateManyMutationInput = {
  username?: String
};

export type ReviewUpdateManyDataInput = {
  text?: String,
  rating?: Int
};

export type ReviewUpdateWithWhereUniqueWithoutAuthorInput = {
  where: ReviewWhereUniqueInput,
  data: ReviewUpdateWithoutAuthorDataInput
};

export type BookUpdateManyMutationInput = {
  title?: String,
  author?: String,
  isbn?: String
};

export type ReviewCreateWithoutAuthorInput = {
  text?: String,
  rating: Int,
  book: BookCreateOneWithoutReviewsInput
};

export type BookCreateOneWithoutReviewsInput = {
  create?: BookCreateWithoutReviewsInput,
  connect?: BookWhereUniqueInput
};

export type ReviewCreateInput = {
  text?: String,
  rating: Int,
  book: BookCreateOneWithoutReviewsInput,
  author: UserCreateOneWithoutReviewsInput
};

export type ReviewUpdateInput = {
  text?: String,
  rating?: Int,
  book?: BookUpdateOneRequiredWithoutReviewsInput,
  author?: UserUpdateOneRequiredWithoutReviewsInput
};

export type BookUpdateOneRequiredWithoutReviewsInput = {
  create?: BookCreateWithoutReviewsInput,
  update?: BookUpdateWithoutReviewsDataInput,
  upsert?: BookUpsertWithoutReviewsInput,
  connect?: BookWhereUniqueInput
};

export type ReviewCreateManyWithoutBookInput = {
  create?: ReviewCreateWithoutBookInput[],
  connect?: ReviewWhereUniqueInput[]
};

export type UserCreateInput = {
  username: String,
  reviews?: ReviewCreateManyWithoutAuthorInput
};

export type UserUpdateInput = {
  username?: String,
  reviews?: ReviewUpdateManyWithoutAuthorInput
};

export type ReviewUpdateWithoutAuthorDataInput = {
  text?: String,
  rating?: Int,
  book?: BookUpdateOneRequiredWithoutReviewsInput
};

export type ReviewSubscriptionWhereInput = {
  mutation_in?: MutationType[],
  updatedFields_contains?: String,
  updatedFields_contains_every?: String[],
  updatedFields_contains_some?: String[],
  node?: ReviewWhereInput,
  AND?: ReviewSubscriptionWhereInput[],
  OR?: ReviewSubscriptionWhereInput[],
  NOT?: ReviewSubscriptionWhereInput[]
};

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
}

export interface ReviewConnection {
  pageInfo: PageInfo;
  edges: ReviewEdge[];
}

export interface ReviewConnectionPromise
  extends Promise<ReviewConnection>,
    Fragmentable {
  pageInfo: <T: PageInfoPromise>() => T;
  edges: <T: FragmentableArray<ReviewEdge>>() => T;
  aggregate: <T: AggregateReviewPromise>() => T;
}

export interface ReviewConnectionSubscription
  extends Promise<AsyncIterator<ReviewConnection>>,
    Fragmentable {
  pageInfo: <T: PageInfoSubscription>() => T;
  edges: <T: Promise<AsyncIterator<ReviewEdgeSubscription>>>() => T;
  aggregate: <T: AggregateReviewSubscription>() => T;
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType;
  node: Review;
  updatedFields: String[];
  previousValues: ReviewPreviousValues;
}

export interface ReviewSubscriptionPayloadPromise
  extends Promise<ReviewSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T: ReviewPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T: ReviewPreviousValuesPromise>() => T;
}

export interface ReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReviewSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T: ReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T: ReviewPreviousValuesSubscription>() => T;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T: BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T: BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T: UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T: UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T: UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T: UserPreviousValuesSubscription>() => T;
}

export interface ReviewPreviousValues {
  id: ID_Output;
  text?: String;
  rating: Int;
}

export interface ReviewPreviousValuesPromise
  extends Promise<ReviewPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
}

export interface ReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<ReviewPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T: UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T: UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  username: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  reviews: <T: FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  reviews: <T: Promise<AsyncIterator<ReviewSubscription>>>(args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface ReviewEdge {
  node: Review;
  cursor: String;
}

export interface ReviewEdgePromise extends Promise<ReviewEdge>, Fragmentable {
  node: <T: ReviewPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReviewEdgeSubscription
  extends Promise<AsyncIterator<ReviewEdge>>,
    Fragmentable {
  node: <T: ReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T: PageInfoPromise>() => T;
  edges: <T: FragmentableArray<BookEdge>>() => T;
  aggregate: <T: AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T: PageInfoSubscription>() => T;
  edges: <T: Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T: AggregateBookSubscription>() => T;
}

export interface BookPreviousValues {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
}

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T: BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T: BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T: BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T: BookPreviousValuesSubscription>() => T;
}

export interface Book {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
  reviews: <T: FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
  reviews: <T: Promise<AsyncIterator<ReviewSubscription>>>(args?: {
    where?: ReviewWhereInput,
    orderBy?: ReviewOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface Review {
  id: ID_Output;
  text?: String;
  rating: Int;
}

export interface ReviewPromise extends Promise<Review>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
  book: <T: BookPromise>() => T;
  author: <T: UserPromise>() => T;
}

export interface ReviewSubscription
  extends Promise<AsyncIterator<Review>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  book: <T: BookSubscription>() => T;
  author: <T: UserSubscription>() => T;
}

export interface AggregateReview {
  count: Int;
}

export interface AggregateReviewPromise
  extends Promise<AggregateReview>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReviewSubscription
  extends Promise<AsyncIterator<AggregateReview>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T: PageInfoPromise>() => T;
  edges: <T: FragmentableArray<UserEdge>>() => T;
  aggregate: <T: AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T: PageInfoSubscription>() => T;
  edges: <T: Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T: AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Book",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma: ClientConstructor<PrismaInterface> = makePrismaClientClass(
  { typeDefs, models, endpoint: `http://localhost:4466/reviews/default` }
);

export const prisma = new Prisma();
