import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PortfolioComingSoon = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-primary">Coming Soon</h1>
                <p className="text-xl text-muted-foreground">
                    This project is currently in development
                </p>
                <Button onClick={() => navigate('/portfolio')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('navigation.portfolio')}
                </Button>
            </div>
        </div>
    );
};

export default PortfolioComingSoon;
