export const STATUS_DEFAULT = {
    loading: false,
    processing: false,
    success: false,
    fail: false
};

export const STATUS = {
    LOADING: {
        ...STATUS_DEFAULT,
        loading: true,
    },
    SUCCESS: {
        ...STATUS_DEFAULT,
        success: true,
    },
    FAIL: {
        ...STATUS_DEFAULT,
        fail: true,
    },
    PROCESSING: {
        ...STATUS_DEFAULT,
        processing: true,
    }
};
