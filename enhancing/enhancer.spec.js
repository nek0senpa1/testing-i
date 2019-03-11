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
                    name: 'Shield',
                    enhancement: 15,
                    durability: 90,
                }
            )).toEqual (
                {
                    name: 'Shield',
                    enhancement: 16,
                    durability: 90,
                }
            )

        })
        
    })


    describe('fail()', function headhurts(){
        
        it('enhancement less than 15', () => {
            expect(fail(
                {
                    name: 'Dagger',
                    enhancement: 14,
                    durability: 90,
                }
            )).toEqual(
                {
                    name: 'Dagger',
                    enhancement: 14,
                    durability: 85,
                }
            )
        })

        it('enhancement 15', ()=> {
            expect(fail(
                {
                    name: 'Dagger',
                    enhancement: 15,
                    durability: 90,
                }
            )).toEqual(
                {
                    name: 'Dagger',
                    enhancement: 15,
                    durability: 80,
                }
            )
        })

        it('enahcement 16+', ()=> {
            expect(fail(
                {
                    name: 'Dagger',
                    enhancement: 17,
                    durability: 90,
                }
            )).toEqual(
                {
                    name: 'Dagger',
                    enhancement: 16,
                    durability: 80,
                }
            )
        })

    })

})