import hell from "index";

{
	describe("hell", testHell);
}

function testHell()
{
	it("should be OK", () =>
	{
		expect(hell()).toEqual(0);
	});
}
