import { GetHeroBanners } from "@/services/banners";
import { GetTopServices } from "@/services/services";
import { GetTopBlogs } from "@/services/blogs";
import { GetTopEvents } from "@/services/events";
import { GetTopLinks } from "@/services/external-links";
import { GetCompanyInfo } from "@/services/company-info";

export enum CacheKeys {
    banners = "banners",
    topServices = "topServices",
    topBlogs = "topBlogs",
    topEvents = "topEvents",
    topLinks = "topLinks",
    companyInfo = "companyInfo",
}

class HomePageStore {
    // Static instance for Singleton
    private static instance: HomePageStore;

    // In-memory cache object
    private cache: Record<string, any>;

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.cache = {};
    }

    // Method to get the single instance of this class
    public static getInstance(): HomePageStore {
        if (!HomePageStore.instance) {
            HomePageStore.instance = new HomePageStore();
        }
        return HomePageStore.instance;
    }

    // Initialize the cache with data fetched from APIs
    public async initialize(): Promise<void> {
        try {
            // Simulating API calls
            const banners = await GetHeroBanners();
            const topServices = await GetTopServices();
            const topBlogs = await GetTopBlogs();
            const topEvents = await GetTopEvents();
            const topLinks = await GetTopLinks();
            const companyInfo = await GetCompanyInfo();

            // Storing data in the cache
            this.cache[CacheKeys.banners] = banners;
            this.cache[CacheKeys.topServices] = topServices;
            this.cache[CacheKeys.topBlogs] = topBlogs;
            this.cache[CacheKeys.topEvents] = topEvents;
            this.cache[CacheKeys.topLinks] = topLinks;
            this.cache[CacheKeys.companyInfo] = companyInfo;
        } catch (error) {
            console.error("Error initializing the cache:", error);
        }
    }

    // Method to retrieve a value from the cache
    public getValue(key: CacheKeys): any {
        // Return the cached value, or undefined if the key does not exist
        return this.cache[key];
    }
}

export default HomePageStore;

// Usage example:
// const cache = HomePageStore.getInstance();
// await cache.initialize();
// const resource1Value = cache.getValue('resource1');
