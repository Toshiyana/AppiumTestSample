const LoginPage = require('../../screenObjects/ios/LoginPage');

describe('サンプルテスト', () => {
    it('適切な値を入力し、成功メッセージを表示', async () => {
        await LoginPage.login('testuser', 'testpass');
        const message = await LoginPage.getLoginMessage();
        expect(message).toBe('成功です');
    });

    it('不適な値を入力し、失敗メッセージを表示', async() => {
        await LoginPage.login('invaliduser', 'invalidpass');
        const message = await LoginPage.getLoginMessage();
        expect(message).toBe('失敗です');
    });
});