export type DeploymentContextType = {
    units: { [key: string]: string };
    setUnitStatus: (unit: string, status: string) => void;
};

export type DeploymentProviderProps = {
    children: React.ReactNode;
};

