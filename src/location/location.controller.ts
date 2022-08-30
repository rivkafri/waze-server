import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.model';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) { }

    @Post()
    createLocation(@Body() newLocation: Location) {
        return this.locationService.createLoction(newLocation);
    }

    @Put(':id')
    updateLocation(@Param('id') locationId: string, @Body() updateLocation: Location) {
        return this.locationService.updateLocation(locationId, updateLocation);
    }

    @Delete(':id')
    deleteLocation(@Param('id') locationId: string) {
        return this.locationService.deleteLocation(locationId);
    }

    @Get(':managerId')
    getLocationBymanagerId(@Param('managerId') managerId: string) {
        return this.locationService.getLocationBymanagerId(managerId);
    }

    @Get()
    getAll() {
        return this.locationService.getLocations();
    }
}
