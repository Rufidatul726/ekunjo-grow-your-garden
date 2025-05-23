export const useLocation = () => {
    const getUserLocation = async () => {
        return new Promise<GeolocationCoordinates>((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by this browser."));
        } else {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position.coords);
            },
            (error) => {
                reject(error);
            }
            );
        }
        });
    };
    
    return { getUserLocation };
};
export default useLocation;   
