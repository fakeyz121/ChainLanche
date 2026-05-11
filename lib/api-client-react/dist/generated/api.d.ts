import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AuthResponse, Conversation, ConversationInput, DashboardStats, DisputeInput, Escrow, Freelancer, FreelancerInput, FreelancerList, FreelancerSummary, FreelancerUpdate, GetRevenueAnalyticsParams, HealthStatus, ListEscrowParams, ListFreelancersParams, ListOrdersParams, ListReviewsParams, ListServicesParams, ListTopupRequestsParams, ListTransactionsParams, ListUsersParams, LoginInput, MarketplaceStats, Message, MessageInput, Notification, Order, OrderInput, OrderList, OrderUpdate, RegisterInput, RevenuePoint, Review, ReviewInput, Service, ServiceInput, ServiceList, ServiceUpdate, SuccessResponse, SuspendInput, TopupApprovalInput, TopupInput, TopupRequest, Transaction, TransactionList, TransferInput, User, UserList, UserUpdate, VerifyInput, WalletBalance, WithdrawInput } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register a new user
 */
export declare const getRegisterUrl: () => string;
export declare const register: (registerInput: RegisterInput, options?: RequestInit) => Promise<AuthResponse>;
export declare const getRegisterMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterInput>;
}, TContext>;
export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type RegisterMutationBody = BodyType<RegisterInput>;
export type RegisterMutationError = ErrorType<unknown>;
/**
 * @summary Register a new user
 */
export declare const useRegister: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterInput>;
}, TContext>;
/**
 * @summary Login
 */
export declare const getLoginUrl: () => string;
export declare const login: (loginInput: LoginInput, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginInput>;
export type LoginMutationError = ErrorType<unknown>;
/**
 * @summary Login
 */
export declare const useLogin: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List users
 */
export declare const getListUsersUrl: (params?: ListUsersParams) => string;
export declare const listUsers: (params?: ListUsersParams, options?: RequestInit) => Promise<UserList>;
export declare const getListUsersQueryKey: (params?: ListUsersParams) => readonly ["/api/users", ...ListUsersParams[]];
export declare const getListUsersQueryOptions: <TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
export type ListUsersQueryError = ErrorType<unknown>;
/**
 * @summary List users
 */
export declare function useListUsers<TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user by ID
 */
export declare const getGetUserUrl: (id: number) => string;
export declare const getUser: (id: number, options?: RequestInit) => Promise<User>;
export declare const getGetUserQueryKey: (id: number) => readonly [`/api/users/${number}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<unknown>;
/**
 * @summary Get user by ID
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update user
 */
export declare const getUpdateUserUrl: (id: number) => string;
export declare const updateUser: (id: number, userUpdate: UserUpdate, options?: RequestInit) => Promise<User>;
export declare const getUpdateUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: number;
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: number;
    data: BodyType<UserUpdate>;
}, TContext>;
export type UpdateUserMutationResult = NonNullable<Awaited<ReturnType<typeof updateUser>>>;
export type UpdateUserMutationBody = BodyType<UserUpdate>;
export type UpdateUserMutationError = ErrorType<unknown>;
/**
 * @summary Update user
 */
export declare const useUpdateUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: number;
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: number;
    data: BodyType<UserUpdate>;
}, TContext>;
/**
 * @summary Suspend/unsuspend user (admin)
 */
export declare const getSuspendUserUrl: (id: number) => string;
export declare const suspendUser: (id: number, suspendInput: SuspendInput, options?: RequestInit) => Promise<User>;
export declare const getSuspendUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof suspendUser>>, TError, {
        id: number;
        data: BodyType<SuspendInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof suspendUser>>, TError, {
    id: number;
    data: BodyType<SuspendInput>;
}, TContext>;
export type SuspendUserMutationResult = NonNullable<Awaited<ReturnType<typeof suspendUser>>>;
export type SuspendUserMutationBody = BodyType<SuspendInput>;
export type SuspendUserMutationError = ErrorType<unknown>;
/**
 * @summary Suspend/unsuspend user (admin)
 */
export declare const useSuspendUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof suspendUser>>, TError, {
        id: number;
        data: BodyType<SuspendInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof suspendUser>>, TError, {
    id: number;
    data: BodyType<SuspendInput>;
}, TContext>;
/**
 * @summary List freelancers
 */
export declare const getListFreelancersUrl: (params?: ListFreelancersParams) => string;
export declare const listFreelancers: (params?: ListFreelancersParams, options?: RequestInit) => Promise<FreelancerList>;
export declare const getListFreelancersQueryKey: (params?: ListFreelancersParams) => readonly ["/api/freelancers", ...ListFreelancersParams[]];
export declare const getListFreelancersQueryOptions: <TData = Awaited<ReturnType<typeof listFreelancers>>, TError = ErrorType<unknown>>(params?: ListFreelancersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFreelancers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listFreelancers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListFreelancersQueryResult = NonNullable<Awaited<ReturnType<typeof listFreelancers>>>;
export type ListFreelancersQueryError = ErrorType<unknown>;
/**
 * @summary List freelancers
 */
export declare function useListFreelancers<TData = Awaited<ReturnType<typeof listFreelancers>>, TError = ErrorType<unknown>>(params?: ListFreelancersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFreelancers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Become a freelancer
 */
export declare const getCreateFreelancerUrl: () => string;
export declare const createFreelancer: (freelancerInput: FreelancerInput, options?: RequestInit) => Promise<Freelancer>;
export declare const getCreateFreelancerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createFreelancer>>, TError, {
        data: BodyType<FreelancerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createFreelancer>>, TError, {
    data: BodyType<FreelancerInput>;
}, TContext>;
export type CreateFreelancerMutationResult = NonNullable<Awaited<ReturnType<typeof createFreelancer>>>;
export type CreateFreelancerMutationBody = BodyType<FreelancerInput>;
export type CreateFreelancerMutationError = ErrorType<unknown>;
/**
 * @summary Become a freelancer
 */
export declare const useCreateFreelancer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createFreelancer>>, TError, {
        data: BodyType<FreelancerInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createFreelancer>>, TError, {
    data: BodyType<FreelancerInput>;
}, TContext>;
/**
 * @summary Get freelancer profile
 */
export declare const getGetFreelancerUrl: (id: number) => string;
export declare const getFreelancer: (id: number, options?: RequestInit) => Promise<Freelancer>;
export declare const getGetFreelancerQueryKey: (id: number) => readonly [`/api/freelancers/${number}`];
export declare const getGetFreelancerQueryOptions: <TData = Awaited<ReturnType<typeof getFreelancer>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFreelancer>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFreelancer>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFreelancerQueryResult = NonNullable<Awaited<ReturnType<typeof getFreelancer>>>;
export type GetFreelancerQueryError = ErrorType<unknown>;
/**
 * @summary Get freelancer profile
 */
export declare function useGetFreelancer<TData = Awaited<ReturnType<typeof getFreelancer>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFreelancer>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update freelancer profile
 */
export declare const getUpdateFreelancerUrl: (id: number) => string;
export declare const updateFreelancer: (id: number, freelancerUpdate: FreelancerUpdate, options?: RequestInit) => Promise<Freelancer>;
export declare const getUpdateFreelancerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFreelancer>>, TError, {
        id: number;
        data: BodyType<FreelancerUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateFreelancer>>, TError, {
    id: number;
    data: BodyType<FreelancerUpdate>;
}, TContext>;
export type UpdateFreelancerMutationResult = NonNullable<Awaited<ReturnType<typeof updateFreelancer>>>;
export type UpdateFreelancerMutationBody = BodyType<FreelancerUpdate>;
export type UpdateFreelancerMutationError = ErrorType<unknown>;
/**
 * @summary Update freelancer profile
 */
export declare const useUpdateFreelancer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFreelancer>>, TError, {
        id: number;
        data: BodyType<FreelancerUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateFreelancer>>, TError, {
    id: number;
    data: BodyType<FreelancerUpdate>;
}, TContext>;
/**
 * @summary Verify/reject freelancer (admin)
 */
export declare const getVerifyFreelancerUrl: (id: number) => string;
export declare const verifyFreelancer: (id: number, verifyInput: VerifyInput, options?: RequestInit) => Promise<Freelancer>;
export declare const getVerifyFreelancerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyFreelancer>>, TError, {
        id: number;
        data: BodyType<VerifyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof verifyFreelancer>>, TError, {
    id: number;
    data: BodyType<VerifyInput>;
}, TContext>;
export type VerifyFreelancerMutationResult = NonNullable<Awaited<ReturnType<typeof verifyFreelancer>>>;
export type VerifyFreelancerMutationBody = BodyType<VerifyInput>;
export type VerifyFreelancerMutationError = ErrorType<unknown>;
/**
 * @summary Verify/reject freelancer (admin)
 */
export declare const useVerifyFreelancer: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyFreelancer>>, TError, {
        id: number;
        data: BodyType<VerifyInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof verifyFreelancer>>, TError, {
    id: number;
    data: BodyType<VerifyInput>;
}, TContext>;
/**
 * @summary List services/gigs
 */
export declare const getListServicesUrl: (params?: ListServicesParams) => string;
export declare const listServices: (params?: ListServicesParams, options?: RequestInit) => Promise<ServiceList>;
export declare const getListServicesQueryKey: (params?: ListServicesParams) => readonly ["/api/services", ...ListServicesParams[]];
export declare const getListServicesQueryOptions: <TData = Awaited<ReturnType<typeof listServices>>, TError = ErrorType<unknown>>(params?: ListServicesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listServices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listServices>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListServicesQueryResult = NonNullable<Awaited<ReturnType<typeof listServices>>>;
export type ListServicesQueryError = ErrorType<unknown>;
/**
 * @summary List services/gigs
 */
export declare function useListServices<TData = Awaited<ReturnType<typeof listServices>>, TError = ErrorType<unknown>>(params?: ListServicesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listServices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a service
 */
export declare const getCreateServiceUrl: () => string;
export declare const createService: (serviceInput: ServiceInput, options?: RequestInit) => Promise<Service>;
export declare const getCreateServiceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createService>>, TError, {
        data: BodyType<ServiceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createService>>, TError, {
    data: BodyType<ServiceInput>;
}, TContext>;
export type CreateServiceMutationResult = NonNullable<Awaited<ReturnType<typeof createService>>>;
export type CreateServiceMutationBody = BodyType<ServiceInput>;
export type CreateServiceMutationError = ErrorType<unknown>;
/**
 * @summary Create a service
 */
export declare const useCreateService: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createService>>, TError, {
        data: BodyType<ServiceInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createService>>, TError, {
    data: BodyType<ServiceInput>;
}, TContext>;
/**
 * @summary Get service detail
 */
export declare const getGetServiceUrl: (id: number) => string;
export declare const getService: (id: number, options?: RequestInit) => Promise<Service>;
export declare const getGetServiceQueryKey: (id: number) => readonly [`/api/services/${number}`];
export declare const getGetServiceQueryOptions: <TData = Awaited<ReturnType<typeof getService>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getService>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getService>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetServiceQueryResult = NonNullable<Awaited<ReturnType<typeof getService>>>;
export type GetServiceQueryError = ErrorType<unknown>;
/**
 * @summary Get service detail
 */
export declare function useGetService<TData = Awaited<ReturnType<typeof getService>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getService>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update service
 */
export declare const getUpdateServiceUrl: (id: number) => string;
export declare const updateService: (id: number, serviceUpdate: ServiceUpdate, options?: RequestInit) => Promise<Service>;
export declare const getUpdateServiceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateService>>, TError, {
        id: number;
        data: BodyType<ServiceUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateService>>, TError, {
    id: number;
    data: BodyType<ServiceUpdate>;
}, TContext>;
export type UpdateServiceMutationResult = NonNullable<Awaited<ReturnType<typeof updateService>>>;
export type UpdateServiceMutationBody = BodyType<ServiceUpdate>;
export type UpdateServiceMutationError = ErrorType<unknown>;
/**
 * @summary Update service
 */
export declare const useUpdateService: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateService>>, TError, {
        id: number;
        data: BodyType<ServiceUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateService>>, TError, {
    id: number;
    data: BodyType<ServiceUpdate>;
}, TContext>;
/**
 * @summary Delete service
 */
export declare const getDeleteServiceUrl: (id: number) => string;
export declare const deleteService: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteServiceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteService>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteService>>, TError, {
    id: number;
}, TContext>;
export type DeleteServiceMutationResult = NonNullable<Awaited<ReturnType<typeof deleteService>>>;
export type DeleteServiceMutationError = ErrorType<unknown>;
/**
 * @summary Delete service
 */
export declare const useDeleteService: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteService>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteService>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get featured/trending services
 */
export declare const getGetFeaturedServicesUrl: () => string;
export declare const getFeaturedServices: (options?: RequestInit) => Promise<Service[]>;
export declare const getGetFeaturedServicesQueryKey: () => readonly ["/api/services/featured"];
export declare const getGetFeaturedServicesQueryOptions: <TData = Awaited<ReturnType<typeof getFeaturedServices>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedServices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFeaturedServices>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFeaturedServicesQueryResult = NonNullable<Awaited<ReturnType<typeof getFeaturedServices>>>;
export type GetFeaturedServicesQueryError = ErrorType<unknown>;
/**
 * @summary Get featured/trending services
 */
export declare function useGetFeaturedServices<TData = Awaited<ReturnType<typeof getFeaturedServices>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedServices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List orders
 */
export declare const getListOrdersUrl: (params?: ListOrdersParams) => string;
export declare const listOrders: (params?: ListOrdersParams, options?: RequestInit) => Promise<OrderList>;
export declare const getListOrdersQueryKey: (params?: ListOrdersParams) => readonly ["/api/orders", ...ListOrdersParams[]];
export declare const getListOrdersQueryOptions: <TData = Awaited<ReturnType<typeof listOrders>>, TError = ErrorType<unknown>>(params?: ListOrdersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOrders>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listOrders>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof listOrders>>>;
export type ListOrdersQueryError = ErrorType<unknown>;
/**
 * @summary List orders
 */
export declare function useListOrders<TData = Awaited<ReturnType<typeof listOrders>>, TError = ErrorType<unknown>>(params?: ListOrdersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listOrders>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Place an order
 */
export declare const getCreateOrderUrl: () => string;
export declare const createOrder: (orderInput: OrderInput, options?: RequestInit) => Promise<Order>;
export declare const getCreateOrderMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOrder>>, TError, {
        data: BodyType<OrderInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createOrder>>, TError, {
    data: BodyType<OrderInput>;
}, TContext>;
export type CreateOrderMutationResult = NonNullable<Awaited<ReturnType<typeof createOrder>>>;
export type CreateOrderMutationBody = BodyType<OrderInput>;
export type CreateOrderMutationError = ErrorType<unknown>;
/**
 * @summary Place an order
 */
export declare const useCreateOrder: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createOrder>>, TError, {
        data: BodyType<OrderInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createOrder>>, TError, {
    data: BodyType<OrderInput>;
}, TContext>;
/**
 * @summary Get order detail
 */
export declare const getGetOrderUrl: (id: number) => string;
export declare const getOrder: (id: number, options?: RequestInit) => Promise<Order>;
export declare const getGetOrderQueryKey: (id: number) => readonly [`/api/orders/${number}`];
export declare const getGetOrderQueryOptions: <TData = Awaited<ReturnType<typeof getOrder>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOrder>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getOrder>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetOrderQueryResult = NonNullable<Awaited<ReturnType<typeof getOrder>>>;
export type GetOrderQueryError = ErrorType<unknown>;
/**
 * @summary Get order detail
 */
export declare function useGetOrder<TData = Awaited<ReturnType<typeof getOrder>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getOrder>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update order status
 */
export declare const getUpdateOrderUrl: (id: number) => string;
export declare const updateOrder: (id: number, orderUpdate: OrderUpdate, options?: RequestInit) => Promise<Order>;
export declare const getUpdateOrderMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOrder>>, TError, {
        id: number;
        data: BodyType<OrderUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateOrder>>, TError, {
    id: number;
    data: BodyType<OrderUpdate>;
}, TContext>;
export type UpdateOrderMutationResult = NonNullable<Awaited<ReturnType<typeof updateOrder>>>;
export type UpdateOrderMutationBody = BodyType<OrderUpdate>;
export type UpdateOrderMutationError = ErrorType<unknown>;
/**
 * @summary Update order status
 */
export declare const useUpdateOrder: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOrder>>, TError, {
        id: number;
        data: BodyType<OrderUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateOrder>>, TError, {
    id: number;
    data: BodyType<OrderUpdate>;
}, TContext>;
/**
 * @summary List escrow records
 */
export declare const getListEscrowUrl: (params?: ListEscrowParams) => string;
export declare const listEscrow: (params?: ListEscrowParams, options?: RequestInit) => Promise<Escrow[]>;
export declare const getListEscrowQueryKey: (params?: ListEscrowParams) => readonly ["/api/escrow", ...ListEscrowParams[]];
export declare const getListEscrowQueryOptions: <TData = Awaited<ReturnType<typeof listEscrow>>, TError = ErrorType<unknown>>(params?: ListEscrowParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEscrow>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEscrow>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEscrowQueryResult = NonNullable<Awaited<ReturnType<typeof listEscrow>>>;
export type ListEscrowQueryError = ErrorType<unknown>;
/**
 * @summary List escrow records
 */
export declare function useListEscrow<TData = Awaited<ReturnType<typeof listEscrow>>, TError = ErrorType<unknown>>(params?: ListEscrowParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEscrow>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get escrow detail
 */
export declare const getGetEscrowUrl: (id: number) => string;
export declare const getEscrow: (id: number, options?: RequestInit) => Promise<Escrow>;
export declare const getGetEscrowQueryKey: (id: number) => readonly [`/api/escrow/${number}`];
export declare const getGetEscrowQueryOptions: <TData = Awaited<ReturnType<typeof getEscrow>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEscrow>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEscrow>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEscrowQueryResult = NonNullable<Awaited<ReturnType<typeof getEscrow>>>;
export type GetEscrowQueryError = ErrorType<unknown>;
/**
 * @summary Get escrow detail
 */
export declare function useGetEscrow<TData = Awaited<ReturnType<typeof getEscrow>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEscrow>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Release escrow payment
 */
export declare const getReleaseEscrowUrl: (id: number) => string;
export declare const releaseEscrow: (id: number, options?: RequestInit) => Promise<Escrow>;
export declare const getReleaseEscrowMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof releaseEscrow>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof releaseEscrow>>, TError, {
    id: number;
}, TContext>;
export type ReleaseEscrowMutationResult = NonNullable<Awaited<ReturnType<typeof releaseEscrow>>>;
export type ReleaseEscrowMutationError = ErrorType<unknown>;
/**
 * @summary Release escrow payment
 */
export declare const useReleaseEscrow: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof releaseEscrow>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof releaseEscrow>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Open a dispute
 */
export declare const getDisputeEscrowUrl: (id: number) => string;
export declare const disputeEscrow: (id: number, disputeInput: DisputeInput, options?: RequestInit) => Promise<Escrow>;
export declare const getDisputeEscrowMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof disputeEscrow>>, TError, {
        id: number;
        data: BodyType<DisputeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof disputeEscrow>>, TError, {
    id: number;
    data: BodyType<DisputeInput>;
}, TContext>;
export type DisputeEscrowMutationResult = NonNullable<Awaited<ReturnType<typeof disputeEscrow>>>;
export type DisputeEscrowMutationBody = BodyType<DisputeInput>;
export type DisputeEscrowMutationError = ErrorType<unknown>;
/**
 * @summary Open a dispute
 */
export declare const useDisputeEscrow: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof disputeEscrow>>, TError, {
        id: number;
        data: BodyType<DisputeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof disputeEscrow>>, TError, {
    id: number;
    data: BodyType<DisputeInput>;
}, TContext>;
/**
 * @summary Get wallet balance
 */
export declare const getGetWalletBalanceUrl: () => string;
export declare const getWalletBalance: (options?: RequestInit) => Promise<WalletBalance>;
export declare const getGetWalletBalanceQueryKey: () => readonly ["/api/wallet/balance"];
export declare const getGetWalletBalanceQueryOptions: <TData = Awaited<ReturnType<typeof getWalletBalance>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWalletBalance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWalletBalance>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWalletBalanceQueryResult = NonNullable<Awaited<ReturnType<typeof getWalletBalance>>>;
export type GetWalletBalanceQueryError = ErrorType<unknown>;
/**
 * @summary Get wallet balance
 */
export declare function useGetWalletBalance<TData = Awaited<ReturnType<typeof getWalletBalance>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWalletBalance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List transactions
 */
export declare const getListTransactionsUrl: (params?: ListTransactionsParams) => string;
export declare const listTransactions: (params?: ListTransactionsParams, options?: RequestInit) => Promise<TransactionList>;
export declare const getListTransactionsQueryKey: (params?: ListTransactionsParams) => readonly ["/api/wallet/transactions", ...ListTransactionsParams[]];
export declare const getListTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof listTransactions>>>;
export type ListTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary List transactions
 */
export declare function useListTransactions<TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Request ChainCoin top-up
 */
export declare const getRequestTopupUrl: () => string;
export declare const requestTopup: (topupInput: TopupInput, options?: RequestInit) => Promise<TopupRequest>;
export declare const getRequestTopupMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestTopup>>, TError, {
        data: BodyType<TopupInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestTopup>>, TError, {
    data: BodyType<TopupInput>;
}, TContext>;
export type RequestTopupMutationResult = NonNullable<Awaited<ReturnType<typeof requestTopup>>>;
export type RequestTopupMutationBody = BodyType<TopupInput>;
export type RequestTopupMutationError = ErrorType<unknown>;
/**
 * @summary Request ChainCoin top-up
 */
export declare const useRequestTopup: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestTopup>>, TError, {
        data: BodyType<TopupInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestTopup>>, TError, {
    data: BodyType<TopupInput>;
}, TContext>;
/**
 * @summary List top-up requests
 */
export declare const getListTopupRequestsUrl: (params?: ListTopupRequestsParams) => string;
export declare const listTopupRequests: (params?: ListTopupRequestsParams, options?: RequestInit) => Promise<TopupRequest[]>;
export declare const getListTopupRequestsQueryKey: (params?: ListTopupRequestsParams) => readonly ["/api/wallet/topup/list", ...ListTopupRequestsParams[]];
export declare const getListTopupRequestsQueryOptions: <TData = Awaited<ReturnType<typeof listTopupRequests>>, TError = ErrorType<unknown>>(params?: ListTopupRequestsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTopupRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTopupRequests>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTopupRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof listTopupRequests>>>;
export type ListTopupRequestsQueryError = ErrorType<unknown>;
/**
 * @summary List top-up requests
 */
export declare function useListTopupRequests<TData = Awaited<ReturnType<typeof listTopupRequests>>, TError = ErrorType<unknown>>(params?: ListTopupRequestsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTopupRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Approve/reject top-up request (admin)
 */
export declare const getApproveTopupUrl: (id: number) => string;
export declare const approveTopup: (id: number, topupApprovalInput: TopupApprovalInput, options?: RequestInit) => Promise<TopupRequest>;
export declare const getApproveTopupMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approveTopup>>, TError, {
        id: number;
        data: BodyType<TopupApprovalInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof approveTopup>>, TError, {
    id: number;
    data: BodyType<TopupApprovalInput>;
}, TContext>;
export type ApproveTopupMutationResult = NonNullable<Awaited<ReturnType<typeof approveTopup>>>;
export type ApproveTopupMutationBody = BodyType<TopupApprovalInput>;
export type ApproveTopupMutationError = ErrorType<unknown>;
/**
 * @summary Approve/reject top-up request (admin)
 */
export declare const useApproveTopup: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approveTopup>>, TError, {
        id: number;
        data: BodyType<TopupApprovalInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof approveTopup>>, TError, {
    id: number;
    data: BodyType<TopupApprovalInput>;
}, TContext>;
/**
 * @summary Request withdrawal
 */
export declare const getRequestWithdrawUrl: () => string;
export declare const requestWithdraw: (withdrawInput: WithdrawInput, options?: RequestInit) => Promise<Transaction>;
export declare const getRequestWithdrawMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestWithdraw>>, TError, {
        data: BodyType<WithdrawInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestWithdraw>>, TError, {
    data: BodyType<WithdrawInput>;
}, TContext>;
export type RequestWithdrawMutationResult = NonNullable<Awaited<ReturnType<typeof requestWithdraw>>>;
export type RequestWithdrawMutationBody = BodyType<WithdrawInput>;
export type RequestWithdrawMutationError = ErrorType<unknown>;
/**
 * @summary Request withdrawal
 */
export declare const useRequestWithdraw: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestWithdraw>>, TError, {
        data: BodyType<WithdrawInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestWithdraw>>, TError, {
    data: BodyType<WithdrawInput>;
}, TContext>;
/**
 * @summary Transfer ChainCoin to another user
 */
export declare const getTransferCoinsUrl: () => string;
export declare const transferCoins: (transferInput: TransferInput, options?: RequestInit) => Promise<Transaction>;
export declare const getTransferCoinsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof transferCoins>>, TError, {
        data: BodyType<TransferInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof transferCoins>>, TError, {
    data: BodyType<TransferInput>;
}, TContext>;
export type TransferCoinsMutationResult = NonNullable<Awaited<ReturnType<typeof transferCoins>>>;
export type TransferCoinsMutationBody = BodyType<TransferInput>;
export type TransferCoinsMutationError = ErrorType<unknown>;
/**
 * @summary Transfer ChainCoin to another user
 */
export declare const useTransferCoins: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof transferCoins>>, TError, {
        data: BodyType<TransferInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof transferCoins>>, TError, {
    data: BodyType<TransferInput>;
}, TContext>;
/**
 * @summary List conversations
 */
export declare const getListConversationsUrl: () => string;
export declare const listConversations: (options?: RequestInit) => Promise<Conversation[]>;
export declare const getListConversationsQueryKey: () => readonly ["/api/conversations"];
export declare const getListConversationsQueryOptions: <TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof listConversations>>>;
export type ListConversationsQueryError = ErrorType<unknown>;
/**
 * @summary List conversations
 */
export declare function useListConversations<TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Start a conversation
 */
export declare const getCreateConversationUrl: () => string;
export declare const createConversation: (conversationInput: ConversationInput, options?: RequestInit) => Promise<Conversation>;
export declare const getCreateConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
export type CreateConversationMutationResult = NonNullable<Awaited<ReturnType<typeof createConversation>>>;
export type CreateConversationMutationBody = BodyType<ConversationInput>;
export type CreateConversationMutationError = ErrorType<unknown>;
/**
 * @summary Start a conversation
 */
export declare const useCreateConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
/**
 * @summary Get messages in conversation
 */
export declare const getListMessagesUrl: (id: number) => string;
export declare const listMessages: (id: number, options?: RequestInit) => Promise<Message[]>;
export declare const getListMessagesQueryKey: (id: number) => readonly [`/api/conversations/${number}/messages`];
export declare const getListMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listMessages>>>;
export type ListMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Get messages in conversation
 */
export declare function useListMessages<TData = Awaited<ReturnType<typeof listMessages>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a message
 */
export declare const getSendMessageUrl: (id: number) => string;
export declare const sendMessage: (id: number, messageInput: MessageInput, options?: RequestInit) => Promise<Message>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        id: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    id: number;
    data: BodyType<MessageInput>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<MessageInput>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
 * @summary Send a message
 */
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        id: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    id: number;
    data: BodyType<MessageInput>;
}, TContext>;
/**
 * @summary List reviews
 */
export declare const getListReviewsUrl: (params?: ListReviewsParams) => string;
export declare const listReviews: (params?: ListReviewsParams, options?: RequestInit) => Promise<Review[]>;
export declare const getListReviewsQueryKey: (params?: ListReviewsParams) => readonly ["/api/reviews", ...ListReviewsParams[]];
export declare const getListReviewsQueryOptions: <TData = Awaited<ReturnType<typeof listReviews>>, TError = ErrorType<unknown>>(params?: ListReviewsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReviews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listReviews>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListReviewsQueryResult = NonNullable<Awaited<ReturnType<typeof listReviews>>>;
export type ListReviewsQueryError = ErrorType<unknown>;
/**
 * @summary List reviews
 */
export declare function useListReviews<TData = Awaited<ReturnType<typeof listReviews>>, TError = ErrorType<unknown>>(params?: ListReviewsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReviews>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a review
 */
export declare const getCreateReviewUrl: () => string;
export declare const createReview: (reviewInput: ReviewInput, options?: RequestInit) => Promise<Review>;
export declare const getCreateReviewMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
        data: BodyType<ReviewInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
    data: BodyType<ReviewInput>;
}, TContext>;
export type CreateReviewMutationResult = NonNullable<Awaited<ReturnType<typeof createReview>>>;
export type CreateReviewMutationBody = BodyType<ReviewInput>;
export type CreateReviewMutationError = ErrorType<unknown>;
/**
 * @summary Submit a review
 */
export declare const useCreateReview: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReview>>, TError, {
        data: BodyType<ReviewInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createReview>>, TError, {
    data: BodyType<ReviewInput>;
}, TContext>;
/**
 * @summary List notifications
 */
export declare const getListNotificationsUrl: () => string;
export declare const listNotifications: (options?: RequestInit) => Promise<Notification[]>;
export declare const getListNotificationsQueryKey: () => readonly ["/api/notifications"];
export declare const getListNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof listNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof listNotifications>>>;
export type ListNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary List notifications
 */
export declare function useListNotifications<TData = Awaited<ReturnType<typeof listNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark notification as read
 */
export declare const getMarkNotificationReadUrl: (id: number) => string;
export declare const markNotificationRead: (id: number, options?: RequestInit) => Promise<Notification>;
export declare const getMarkNotificationReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    id: number;
}, TContext>;
export type MarkNotificationReadMutationResult = NonNullable<Awaited<ReturnType<typeof markNotificationRead>>>;
export type MarkNotificationReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark notification as read
 */
export declare const useMarkNotificationRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Mark all notifications as read
 */
export declare const getMarkAllNotificationsReadUrl: () => string;
export declare const markAllNotificationsRead: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getMarkAllNotificationsReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
export type MarkAllNotificationsReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAllNotificationsRead>>>;
export type MarkAllNotificationsReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark all notifications as read
 */
export declare const useMarkAllNotificationsRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
/**
 * @summary Get dashboard summary stats
 */
export declare const getGetDashboardStatsUrl: () => string;
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/analytics/dashboard"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary stats
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get revenue chart data
 */
export declare const getGetRevenueAnalyticsUrl: (params?: GetRevenueAnalyticsParams) => string;
export declare const getRevenueAnalytics: (params?: GetRevenueAnalyticsParams, options?: RequestInit) => Promise<RevenuePoint[]>;
export declare const getGetRevenueAnalyticsQueryKey: (params?: GetRevenueAnalyticsParams) => readonly ["/api/analytics/revenue", ...GetRevenueAnalyticsParams[]];
export declare const getGetRevenueAnalyticsQueryOptions: <TData = Awaited<ReturnType<typeof getRevenueAnalytics>>, TError = ErrorType<unknown>>(params?: GetRevenueAnalyticsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRevenueAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRevenueAnalytics>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRevenueAnalyticsQueryResult = NonNullable<Awaited<ReturnType<typeof getRevenueAnalytics>>>;
export type GetRevenueAnalyticsQueryError = ErrorType<unknown>;
/**
 * @summary Get revenue chart data
 */
export declare function useGetRevenueAnalytics<TData = Awaited<ReturnType<typeof getRevenueAnalytics>>, TError = ErrorType<unknown>>(params?: GetRevenueAnalyticsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRevenueAnalytics>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get marketplace overview stats
 */
export declare const getGetMarketplaceStatsUrl: () => string;
export declare const getMarketplaceStats: (options?: RequestInit) => Promise<MarketplaceStats>;
export declare const getGetMarketplaceStatsQueryKey: () => readonly ["/api/analytics/marketplace"];
export declare const getGetMarketplaceStatsQueryOptions: <TData = Awaited<ReturnType<typeof getMarketplaceStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMarketplaceStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMarketplaceStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMarketplaceStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getMarketplaceStats>>>;
export type GetMarketplaceStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get marketplace overview stats
 */
export declare function useGetMarketplaceStats<TData = Awaited<ReturnType<typeof getMarketplaceStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMarketplaceStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get top-earning freelancers
 */
export declare const getGetTopFreelancersUrl: () => string;
export declare const getTopFreelancers: (options?: RequestInit) => Promise<FreelancerSummary[]>;
export declare const getGetTopFreelancersQueryKey: () => readonly ["/api/analytics/top-freelancers"];
export declare const getGetTopFreelancersQueryOptions: <TData = Awaited<ReturnType<typeof getTopFreelancers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopFreelancers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTopFreelancers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTopFreelancersQueryResult = NonNullable<Awaited<ReturnType<typeof getTopFreelancers>>>;
export type GetTopFreelancersQueryError = ErrorType<unknown>;
/**
 * @summary Get top-earning freelancers
 */
export declare function useGetTopFreelancers<TData = Awaited<ReturnType<typeof getTopFreelancers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopFreelancers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map