"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../services/hello.service");

describe("Test 'hello' service", () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'hello.hello' action", () => {

		it("should return with 'Hello Moleculer'", async () => {
			const res = await broker.call("hello.hello");
			expect(res).toBe("Hello Moleculer");
		});

	});

	describe("Test 'hello.welcome' action", () => {

		it("should return with 'Welcome'", async () => {
			const res = await broker.call("hello.welcome", { name: "Adam" });
			expect(res).toBe("Welcome, Adam");
		});

		it("should reject an ValidationError", async () => {
			expect.assertions(1);
			try {
				await broker.call("hello.welcome");
			} catch(err) {
				expect(err).toBeInstanceOf(ValidationError);
			}
		});

	});

});

