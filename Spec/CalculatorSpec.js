describe("Calculator", function(){
	beforeEach(function(){
		var calculator = new Calculator();
	});
	describe("add", function(){
		it("should be able to add 2 numbers", function(){
		var result = calculator.add(2,3);
		expect(result).toEqual(5);
	});
	it("should throw an error if both arguments are not provided.", function(){
		expect(function(){
			calculator.add(1)
		}).toThrow();
	})
	})
	
})