import { GetMemberByEmailOrTelegramId } from "./members";
import mainCall from "@/services/rest-api/main-call";
import { MembersAPIPath } from "@/constants/api-path/members";

jest.mock("@/services/rest-api/main-call");

describe("GetMemberByEmailOrTelegramId", () => {
    const mockMainCall = jest.mocked(mainCall);

    it("should throw an error if neither email nor telegramId is provided", async () => {
        await expect(GetMemberByEmailOrTelegramId("", "")).rejects.toThrow(
            "Email Or TelegramId should be provided"
        );
    });

    it("should return member data if email or telegramId is valid", async () => {
        const mockResponse = {
            data: [
                {
                    fullName: "John Doe",
                    email: "john@example.com",
                    telegramId: "@john2024",
                },
            ],
        };
        mockMainCall.mockResolvedValueOnce(mockResponse);

        const result = await GetMemberByEmailOrTelegramId(
            "john@example.com",
            "@john2024"
        );

        expect(result).toEqual(mockResponse.data[0]);
        expect(mockMainCall).toHaveBeenCalledWith({
            ...MembersAPIPath.findMember,
            url: expect.stringContaining(
                "?filters[$or][0][email][$eqi]=john@example.com&filters[$or][1][telegramId][$eqi]=@john2024"
            ),
        });
    });

    it("should return an empty object if no member is found", async () => {
        mockMainCall.mockResolvedValueOnce({ data: [] });

        const result = await GetMemberByEmailOrTelegramId(
            "nonexistent@example.com",
            "@nonexistent"
        );

        expect(result).toEqual({});
    });
});
