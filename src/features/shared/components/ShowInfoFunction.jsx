import { Card, Avatar, Text, Group, Button} from "@mantine/core";
import {
  IconUser,
  IconBuilding,
  IconCalendar,
  IconPhone,
  IconEdit,
  IconMail,
} from "@tabler/icons-react";
import useDrawer from "../../store/states/useDrawer";
import useGolds from "../../store/states/useGolds";
import useManufacturers from "../../store/states/useManufacturers";
function ShowInfoFunction() {
  let {drawerContent,drawerData,openDrawer} = useDrawer()
  let {manufacturers}= useManufacturers()
  let {golds} = useGolds()

  let listStore ={
    golds:golds.body[drawerData-1],
    manufacturers:manufacturers.body[drawerData-1]
  }
 
 
  
  let {image,age,email,contactPerson,companyName,phone,about,gender} = listStore[drawerContent]
  // console.log(image,age,email,contactPerson,companyName,phone,about);
  
  return (
    <>
      <div className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <Card
            withBorder
            radius="lg"
            shadow="xl"
            padding="xl"
            className="bg-white backdrop-blur-sm bg-opacity-95"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* بخش سمت چپ - آواتار و اطلاعات کلی */}
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative">
                  <Avatar
                    src={image}
                    size={160}
                    radius="50%"
                    color="gold"
                    className="border-4 border-gold-200 shadow-2xl"
                    styles={{
                      placeholder: {
                        fontSize: "60px",
                        fontWeight: 700,
                        color: "white",
                      },
                    }}
                    name={contactPerson}
                  />
                </div>

                <div className="mt-6 text-center">
                  <Text size="xl" fw={700} className="mb-1 text-gray-800">
                    {contactPerson}
                  </Text>
                  <Text size="sm" className="mb-3 text-gray-600">
                    {gender}
                  </Text>

                  <Group justify="center" className="mt-4">
                    <Button
                      variant="outline"
                      color="gold"
                      leftSection={<IconEdit size={18} />}
                      onClick={()=>{
                        openDrawer({state:true ,content:drawerContent,mode:"edit",data:drawerData})
                      }}
                      size="md"
                      className="shadow-md hover:shadow-lg transition-shadow bg-gold-600 hover:bg-gold-700"
                    >
                      Edit
                    </Button>
                  </Group>
                </div>

                {/* اطلاعات تماس */}
                <Card withBorder radius="md" className="mt-6 w-full bg-gray-50">
                  <Text size="md" fw={600} className="mb-3 text-gray-700">
                    Contact Information
                  </Text>

                  <div className="space-y-3">
                    <Group className="pt-4">
                      <IconPhone size={18} className="text-gold-600"color="gold" />
                      <Text size="sm" className="text-gray-600">
                        {phone}
                      </Text>
                    </Group>

                    <Group>
                      <IconMail size={18} className="text-gold-600" color="gold" />
                      <Text size="sm" className="text-gray-600">
                        {email}
                      </Text>
                    </Group>
                  </div>
                </Card>
              </div>

              {/* بخش سمت راست - اطلاعات جزئی */}
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* اطلاعات شرکت */}
                  <Card
                    withBorder
                    radius="md"
                    padding="lg"
                    className="bg-gray-50 hover:shadow-md transition-shadow"
                  >
                    <Group mb="sm">
                      <div className="p-2 rounded-lg bg-gold-50">
                        <IconBuilding
                          size={20}
                          color="gold"
                          className="text-gold-600"
                        />
                      </div>
                      <Text size="md" fw={600} className="text-gray-700">
                        Company
                      </Text>
                    </Group>

                    <Text size="lg" fw={500} className="text-gray-800">
                      {companyName}
                    </Text>
                  </Card>

                  {/* سن */}
                  <Card
                    withBorder
                    radius="md"
                    padding="lg"
                    className="bg-gray-50 hover:shadow-md transition-shadow"
                  >
                    <Group mb="sm">
                      <div className="p-2 rounded-lg bg-gold-50">
                        <IconCalendar
                          color="gold"
                          size={20}
                          className="text-gold-600"
                        />
                      </div>
                      <Text size="md" fw={600} className="text-gray-700">
                        Age
                      </Text>
                    </Group>

                    <Text size="lg" fw={500} className="text-gray-800">
                      {age} years
                    </Text>
                  </Card>
                </div>

                {/* درباره شخص */}
                <Card
                  withBorder
                  radius="md"
                  padding="lg"
                  className="bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <Text size="md" fw={600} className="mb-3 text-gray-700">
                    About Me
                  </Text>

                  <Text className="leading-relaxed text-gray-600">
                    {about}
                  </Text>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ShowInfoFunction;
