function classes(...names: (string | undefined | void)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;