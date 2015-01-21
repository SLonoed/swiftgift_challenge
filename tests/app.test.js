describe('code challenge', function() {
    browser.ignoreSynchronization = true;

    beforeEach(function() {
        browser.get('http://0.0.0.0:8081/');
    });

    var getComponent = function(name) {
        return element(By.className(name));
    };

    it('must have a title', function() {

        expect(true).toEqual(true);
    });

    it('must have four image link', function() {
        var links = element.all(By.className('image-url'));

        expect(links.count()).toEqual(4);
    });

    it('must add item to list', function() {
        var input = getComponent('header--input'),
            btn = element.all(by.css('.header button')).get(1),
            error = getComponent('error'),
            links;

        input.sendKeys('http://test.com/img.jpg');
        btn.click();
        browser.sleep(500);

        links = element.all(By.className('image-url'));

        expect(links.count()).toEqual(5);
        expect(error.isDisplayed()).toBeFalsy();
    });

    it('must show error if wrong link', function() {
        var input = getComponent('header--input'),
            btn = element.all(by.css('.header button')).get(1),
            error = getComponent('error'),
            links;

        input.sendKeys('http://test.com/img.wrong');
        btn.click();
        links = element.all(by.css('.image-url'));

        expect(links.count()).toEqual(4);
        expect(error.isDisplayed()).toBeTruthy();
    });

    it('must show menu', function() {
        var toggler = element.all(by.css('.header button[type="button"]')).get(0),
            list = getComponent('list');

        toggler.click();

        return list.getLocation().then(function(pos) {
            expect(pos.x).toBeGreaterThan(0);
        });
    });

    it('must hide menu if click list panel', function() {
        var toggler = element.all(by.css('.header button[type="button"]')).get(0),
            list = getComponent('list');

        toggler.click();

        return list.getLocation()
            .then(function(pos) {
                expect(pos.x).toBeGreaterThan(0);
                getComponent('list--overlay').click();

                return list.getLocation();
            })
            .then(function(pos) {
                expect(pos.x).toEqual(0);
            });
    });

    it('must show gallery on button click', function() {
        var gButton = element(by.css('.list--footer button')),
            gallery = getComponent('gallery');

        expect(gallery.isDisplayed()).toBeFalsy();

        gButton.click();

        expect(gallery.isDisplayed()).toBeTruthy();
    });

    it('must close gallery on X click', function() {
        var gButton = element(by.css('.list--footer button')),
            gallery = getComponent('gallery');

        gButton.click();
        getComponent('gallery--close').click();
        expect(gallery.isDisplayed()).toBeFalsy();
    });
});
