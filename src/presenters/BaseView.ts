export interface BaseView {
    showLoader(): void;

    hideLoader(): void;

    showErrorMessage(message: string): void;

    navigateToNewPath(path: string): void;
}