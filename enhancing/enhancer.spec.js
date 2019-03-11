const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancer.js', ()=> {

    test ('is working?', () => {
        expect(true).toBe(true);
    })



    describe('repair()', () =>{

        it ('repairs to durability 100', () => {
            expect(repair(
                {
                    name: 'Sword',
                    enhancement: 15,
                    durability: 90,
                }
            )).toEqual(
                {
                    name: 'Sword',
                    enhancement: 15,
                    durability: 100,
                }
            );
        })

    })

    describe('succeed()', function weeeee() {

        it('succeed at enhancing', () => {

            expect(succeed(
                {
                    name: 'Sword',
                    enhancement: 15,
                    durability: 90,
                }
            )).toEqual (
                {
                    name: 'Sword',
                    enhancement: 16,
                    durability: 90,
                }
            )

        })
        
    })

})