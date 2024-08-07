export interface Notification {
    recipient: string;
    sender: string;
    message: string;
    date: Date;
}

export const notifications: Notification[] = [
    { recipient: "JohnDoe", sender: "Admin", message: "Your account has been updated.", date: new Date("2024-08-01") },
    { recipient: "JaneSmith", sender: "Support", message: "Your ticket has been resolved.", date: new Date("2024-08-02") },
    { recipient: "MikeBrown", sender: "Admin", message: "New features have been added.", date: new Date("2024-08-03") },
    { recipient: "EmilyWhite", sender: "System", message: "Scheduled maintenance on August 5th.", date: new Date("2024-08-04") },
    { recipient: "ChrisGreen", sender: "Admin", message: "Password change required.", date: new Date("2024-08-05") },
    { recipient: "SarahBlack", sender: "Support", message: "Your issue has been escalated.", date: new Date("2024-08-06") },
    { recipient: "DavidBlue", sender: "Admin", message: "Welcome to our new platform.", date: new Date("2024-08-07") },
    { recipient: "LauraRed", sender: "System", message: "System update completed.", date: new Date("2024-08-08") },
    { recipient: "TomYellow", sender: "Admin", message: "Your subscription is about to expire.", date: new Date("2024-08-09") },
    { recipient: "AnnaPurple", sender: "Support", message: "We have received your feedback.", date: new Date("2024-08-10") }
];

