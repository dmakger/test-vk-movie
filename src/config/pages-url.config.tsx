
// ======={ MAIN }=======
class Main {
    private root = ''

    HOME = `${this.root}/`
    MOVIE = (id: string | number) => `${this.root}/movie/${id}/`
}

export const MAIN_PAGES = new Main()