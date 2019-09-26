import classes from '../classes'
describe('button', () => {
    it('接受 1 个 classname', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('接受 2 个 classname', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });

    it('接受 undefined, 结果不会出现undefined', () => {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    });

    it('接受 undefined 和中文, 结果不会出现undefined和中文', () => {
        const result = classes('a', undefined, '中文', false, null);
        expect(result).toEqual('a 中文');
    });

    it('什么都不传, 结果是空字符串', () => {
        const result = classes();
        expect(result).toEqual('');
    })
});