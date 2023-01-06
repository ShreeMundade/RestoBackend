import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { E1List } from "./e1/E1List";
import { E1Create } from "./e1/E1Create";
import { E1Edit } from "./e1/E1Edit";
import { E1Show } from "./e1/E1Show";
import { E2List } from "./e2/E2List";
import { E2Create } from "./e2/E2Create";
import { E2Edit } from "./e2/E2Edit";
import { E2Show } from "./e2/E2Show";
import { E3List } from "./e3/E3List";
import { E3Create } from "./e3/E3Create";
import { E3Edit } from "./e3/E3Edit";
import { E3Show } from "./e3/E3Show";
import { E4List } from "./e4/E4List";
import { E4Create } from "./e4/E4Create";
import { E4Edit } from "./e4/E4Edit";
import { E4Show } from "./e4/E4Show";
import { E5List } from "./e5/E5List";
import { E5Create } from "./e5/E5Create";
import { E5Edit } from "./e5/E5Edit";
import { E5Show } from "./e5/E5Show";
import { E6List } from "./e6/E6List";
import { E6Create } from "./e6/E6Create";
import { E6Edit } from "./e6/E6Edit";
import { E6Show } from "./e6/E6Show";
import { E7List } from "./e7/E7List";
import { E7Create } from "./e7/E7Create";
import { E7Edit } from "./e7/E7Edit";
import { E7Show } from "./e7/E7Show";
import { E8List } from "./e8/E8List";
import { E8Create } from "./e8/E8Create";
import { E8Edit } from "./e8/E8Edit";
import { E8Show } from "./e8/E8Show";
import { E9List } from "./e9/E9List";
import { E9Create } from "./e9/E9Create";
import { E9Edit } from "./e9/E9Edit";
import { E9Show } from "./e9/E9Show";
import { E10List } from "./e10/E10List";
import { E10Create } from "./e10/E10Create";
import { E10Edit } from "./e10/E10Edit";
import { E10Show } from "./e10/E10Show";
import { E11List } from "./e11/E11List";
import { E11Create } from "./e11/E11Create";
import { E11Edit } from "./e11/E11Edit";
import { E11Show } from "./e11/E11Show";
import { E12List } from "./e12/E12List";
import { E12Create } from "./e12/E12Create";
import { E12Edit } from "./e12/E12Edit";
import { E12Show } from "./e12/E12Show";
import { E13List } from "./e13/E13List";
import { E13Create } from "./e13/E13Create";
import { E13Edit } from "./e13/E13Edit";
import { E13Show } from "./e13/E13Show";
import { E14List } from "./e14/E14List";
import { E14Create } from "./e14/E14Create";
import { E14Edit } from "./e14/E14Edit";
import { E14Show } from "./e14/E14Show";
import { E15List } from "./e15/E15List";
import { E15Create } from "./e15/E15Create";
import { E15Edit } from "./e15/E15Edit";
import { E15Show } from "./e15/E15Show";
import { E16List } from "./e16/E16List";
import { E16Create } from "./e16/E16Create";
import { E16Edit } from "./e16/E16Edit";
import { E16Show } from "./e16/E16Show";
import { E17List } from "./e17/E17List";
import { E17Create } from "./e17/E17Create";
import { E17Edit } from "./e17/E17Edit";
import { E17Show } from "./e17/E17Show";
import { E18List } from "./e18/E18List";
import { E18Create } from "./e18/E18Create";
import { E18Edit } from "./e18/E18Edit";
import { E18Show } from "./e18/E18Show";
import { E19List } from "./e19/E19List";
import { E19Create } from "./e19/E19Create";
import { E19Edit } from "./e19/E19Edit";
import { E19Show } from "./e19/E19Show";
import { E20List } from "./e20/E20List";
import { E20Create } from "./e20/E20Create";
import { E20Edit } from "./e20/E20Edit";
import { E20Show } from "./e20/E20Show";
import { E21List } from "./e21/E21List";
import { E21Create } from "./e21/E21Create";
import { E21Edit } from "./e21/E21Edit";
import { E21Show } from "./e21/E21Show";
import { E22List } from "./e22/E22List";
import { E22Create } from "./e22/E22Create";
import { E22Edit } from "./e22/E22Edit";
import { E22Show } from "./e22/E22Show";
import { E23List } from "./e23/E23List";
import { E23Create } from "./e23/E23Create";
import { E23Edit } from "./e23/E23Edit";
import { E23Show } from "./e23/E23Show";
import { E24List } from "./e24/E24List";
import { E24Create } from "./e24/E24Create";
import { E24Edit } from "./e24/E24Edit";
import { E24Show } from "./e24/E24Show";
import { E25List } from "./e25/E25List";
import { E25Create } from "./e25/E25Create";
import { E25Edit } from "./e25/E25Edit";
import { E25Show } from "./e25/E25Show";
import { E26List } from "./e26/E26List";
import { E26Create } from "./e26/E26Create";
import { E26Edit } from "./e26/E26Edit";
import { E26Show } from "./e26/E26Show";
import { E27List } from "./e27/E27List";
import { E27Create } from "./e27/E27Create";
import { E27Edit } from "./e27/E27Edit";
import { E27Show } from "./e27/E27Show";
import { E28List } from "./e28/E28List";
import { E28Create } from "./e28/E28Create";
import { E28Edit } from "./e28/E28Edit";
import { E28Show } from "./e28/E28Show";
import { E29List } from "./e29/E29List";
import { E29Create } from "./e29/E29Create";
import { E29Edit } from "./e29/E29Edit";
import { E29Show } from "./e29/E29Show";
import { E30List } from "./e30/E30List";
import { E30Create } from "./e30/E30Create";
import { E30Edit } from "./e30/E30Edit";
import { E30Show } from "./e30/E30Show";
import { E31List } from "./e31/E31List";
import { E31Create } from "./e31/E31Create";
import { E31Edit } from "./e31/E31Edit";
import { E31Show } from "./e31/E31Show";
import { E32List } from "./e32/E32List";
import { E32Create } from "./e32/E32Create";
import { E32Edit } from "./e32/E32Edit";
import { E32Show } from "./e32/E32Show";
import { E33List } from "./e33/E33List";
import { E33Create } from "./e33/E33Create";
import { E33Edit } from "./e33/E33Edit";
import { E33Show } from "./e33/E33Show";
import { E34List } from "./e34/E34List";
import { E34Create } from "./e34/E34Create";
import { E34Edit } from "./e34/E34Edit";
import { E34Show } from "./e34/E34Show";
import { E35List } from "./e35/E35List";
import { E35Create } from "./e35/E35Create";
import { E35Edit } from "./e35/E35Edit";
import { E35Show } from "./e35/E35Show";
import { E36List } from "./e36/E36List";
import { E36Create } from "./e36/E36Create";
import { E36Edit } from "./e36/E36Edit";
import { E36Show } from "./e36/E36Show";
import { E37List } from "./e37/E37List";
import { E37Create } from "./e37/E37Create";
import { E37Edit } from "./e37/E37Edit";
import { E37Show } from "./e37/E37Show";
import { E38List } from "./e38/E38List";
import { E38Create } from "./e38/E38Create";
import { E38Edit } from "./e38/E38Edit";
import { E38Show } from "./e38/E38Show";
import { E39List } from "./e39/E39List";
import { E39Create } from "./e39/E39Create";
import { E39Edit } from "./e39/E39Edit";
import { E39Show } from "./e39/E39Show";
import { E40List } from "./e40/E40List";
import { E40Create } from "./e40/E40Create";
import { E40Edit } from "./e40/E40Edit";
import { E40Show } from "./e40/E40Show";
import { E41List } from "./e41/E41List";
import { E41Create } from "./e41/E41Create";
import { E41Edit } from "./e41/E41Edit";
import { E41Show } from "./e41/E41Show";
import { E42List } from "./e42/E42List";
import { E42Create } from "./e42/E42Create";
import { E42Edit } from "./e42/E42Edit";
import { E42Show } from "./e42/E42Show";
import { E43List } from "./e43/E43List";
import { E43Create } from "./e43/E43Create";
import { E43Edit } from "./e43/E43Edit";
import { E43Show } from "./e43/E43Show";
import { E44List } from "./e44/E44List";
import { E44Create } from "./e44/E44Create";
import { E44Edit } from "./e44/E44Edit";
import { E44Show } from "./e44/E44Show";
import { E45List } from "./e45/E45List";
import { E45Create } from "./e45/E45Create";
import { E45Edit } from "./e45/E45Edit";
import { E45Show } from "./e45/E45Show";
import { E46List } from "./e46/E46List";
import { E46Create } from "./e46/E46Create";
import { E46Edit } from "./e46/E46Edit";
import { E46Show } from "./e46/E46Show";
import { E47List } from "./e47/E47List";
import { E47Create } from "./e47/E47Create";
import { E47Edit } from "./e47/E47Edit";
import { E47Show } from "./e47/E47Show";
import { E48List } from "./e48/E48List";
import { E48Create } from "./e48/E48Create";
import { E48Edit } from "./e48/E48Edit";
import { E48Show } from "./e48/E48Show";
import { E49List } from "./e49/E49List";
import { E49Create } from "./e49/E49Create";
import { E49Edit } from "./e49/E49Edit";
import { E49Show } from "./e49/E49Show";
import { E50List } from "./e50/E50List";
import { E50Create } from "./e50/E50Create";
import { E50Edit } from "./e50/E50Edit";
import { E50Show } from "./e50/E50Show";
import { E51List } from "./e51/E51List";
import { E51Create } from "./e51/E51Create";
import { E51Edit } from "./e51/E51Edit";
import { E51Show } from "./e51/E51Show";
import { E52List } from "./e52/E52List";
import { E52Create } from "./e52/E52Create";
import { E52Edit } from "./e52/E52Edit";
import { E52Show } from "./e52/E52Show";
import { E53List } from "./e53/E53List";
import { E53Create } from "./e53/E53Create";
import { E53Edit } from "./e53/E53Edit";
import { E53Show } from "./e53/E53Show";
import { E54List } from "./e54/E54List";
import { E54Create } from "./e54/E54Create";
import { E54Edit } from "./e54/E54Edit";
import { E54Show } from "./e54/E54Show";
import { E55List } from "./e55/E55List";
import { E55Create } from "./e55/E55Create";
import { E55Edit } from "./e55/E55Edit";
import { E55Show } from "./e55/E55Show";
import { E56List } from "./e56/E56List";
import { E56Create } from "./e56/E56Create";
import { E56Edit } from "./e56/E56Edit";
import { E56Show } from "./e56/E56Show";
import { E57List } from "./e57/E57List";
import { E57Create } from "./e57/E57Create";
import { E57Edit } from "./e57/E57Edit";
import { E57Show } from "./e57/E57Show";
import { E58List } from "./e58/E58List";
import { E58Create } from "./e58/E58Create";
import { E58Edit } from "./e58/E58Edit";
import { E58Show } from "./e58/E58Show";
import { E59List } from "./e59/E59List";
import { E59Create } from "./e59/E59Create";
import { E59Edit } from "./e59/E59Edit";
import { E59Show } from "./e59/E59Show";
import { E60List } from "./e60/E60List";
import { E60Create } from "./e60/E60Create";
import { E60Edit } from "./e60/E60Edit";
import { E60Show } from "./e60/E60Show";
import { E61List } from "./e61/E61List";
import { E61Create } from "./e61/E61Create";
import { E61Edit } from "./e61/E61Edit";
import { E61Show } from "./e61/E61Show";
import { E62List } from "./e62/E62List";
import { E62Create } from "./e62/E62Create";
import { E62Edit } from "./e62/E62Edit";
import { E62Show } from "./e62/E62Show";
import { E63List } from "./e63/E63List";
import { E63Create } from "./e63/E63Create";
import { E63Edit } from "./e63/E63Edit";
import { E63Show } from "./e63/E63Show";
import { E64List } from "./e64/E64List";
import { E64Create } from "./e64/E64Create";
import { E64Edit } from "./e64/E64Edit";
import { E64Show } from "./e64/E64Show";
import { E65List } from "./e65/E65List";
import { E65Create } from "./e65/E65Create";
import { E65Edit } from "./e65/E65Edit";
import { E65Show } from "./e65/E65Show";
import { E66List } from "./e66/E66List";
import { E66Create } from "./e66/E66Create";
import { E66Edit } from "./e66/E66Edit";
import { E66Show } from "./e66/E66Show";
import { E67List } from "./e67/E67List";
import { E67Create } from "./e67/E67Create";
import { E67Edit } from "./e67/E67Edit";
import { E67Show } from "./e67/E67Show";
import { E68List } from "./e68/E68List";
import { E68Create } from "./e68/E68Create";
import { E68Edit } from "./e68/E68Edit";
import { E68Show } from "./e68/E68Show";
import { E69List } from "./e69/E69List";
import { E69Create } from "./e69/E69Create";
import { E69Edit } from "./e69/E69Edit";
import { E69Show } from "./e69/E69Show";
import { E70List } from "./e70/E70List";
import { E70Create } from "./e70/E70Create";
import { E70Edit } from "./e70/E70Edit";
import { E70Show } from "./e70/E70Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="E1"
          list={E1List}
          edit={E1Edit}
          create={E1Create}
          show={E1Show}
        />
        <Resource
          name="E2"
          list={E2List}
          edit={E2Edit}
          create={E2Create}
          show={E2Show}
        />
        <Resource
          name="E3"
          list={E3List}
          edit={E3Edit}
          create={E3Create}
          show={E3Show}
        />
        <Resource
          name="E4"
          list={E4List}
          edit={E4Edit}
          create={E4Create}
          show={E4Show}
        />
        <Resource
          name="E5"
          list={E5List}
          edit={E5Edit}
          create={E5Create}
          show={E5Show}
        />
        <Resource
          name="E6"
          list={E6List}
          edit={E6Edit}
          create={E6Create}
          show={E6Show}
        />
        <Resource
          name="E7"
          list={E7List}
          edit={E7Edit}
          create={E7Create}
          show={E7Show}
        />
        <Resource
          name="E8"
          list={E8List}
          edit={E8Edit}
          create={E8Create}
          show={E8Show}
        />
        <Resource
          name="E9"
          list={E9List}
          edit={E9Edit}
          create={E9Create}
          show={E9Show}
        />
        <Resource
          name="E10"
          list={E10List}
          edit={E10Edit}
          create={E10Create}
          show={E10Show}
        />
        <Resource
          name="E11"
          list={E11List}
          edit={E11Edit}
          create={E11Create}
          show={E11Show}
        />
        <Resource
          name="E12"
          list={E12List}
          edit={E12Edit}
          create={E12Create}
          show={E12Show}
        />
        <Resource
          name="E13"
          list={E13List}
          edit={E13Edit}
          create={E13Create}
          show={E13Show}
        />
        <Resource
          name="E14"
          list={E14List}
          edit={E14Edit}
          create={E14Create}
          show={E14Show}
        />
        <Resource
          name="E15"
          list={E15List}
          edit={E15Edit}
          create={E15Create}
          show={E15Show}
        />
        <Resource
          name="E16"
          list={E16List}
          edit={E16Edit}
          create={E16Create}
          show={E16Show}
        />
        <Resource
          name="E17"
          list={E17List}
          edit={E17Edit}
          create={E17Create}
          show={E17Show}
        />
        <Resource
          name="E18"
          list={E18List}
          edit={E18Edit}
          create={E18Create}
          show={E18Show}
        />
        <Resource
          name="E19"
          list={E19List}
          edit={E19Edit}
          create={E19Create}
          show={E19Show}
        />
        <Resource
          name="E20"
          list={E20List}
          edit={E20Edit}
          create={E20Create}
          show={E20Show}
        />
        <Resource
          name="E21"
          list={E21List}
          edit={E21Edit}
          create={E21Create}
          show={E21Show}
        />
        <Resource
          name="E22"
          list={E22List}
          edit={E22Edit}
          create={E22Create}
          show={E22Show}
        />
        <Resource
          name="E23"
          list={E23List}
          edit={E23Edit}
          create={E23Create}
          show={E23Show}
        />
        <Resource
          name="E24"
          list={E24List}
          edit={E24Edit}
          create={E24Create}
          show={E24Show}
        />
        <Resource
          name="E25"
          list={E25List}
          edit={E25Edit}
          create={E25Create}
          show={E25Show}
        />
        <Resource
          name="E26"
          list={E26List}
          edit={E26Edit}
          create={E26Create}
          show={E26Show}
        />
        <Resource
          name="E27"
          list={E27List}
          edit={E27Edit}
          create={E27Create}
          show={E27Show}
        />
        <Resource
          name="E28"
          list={E28List}
          edit={E28Edit}
          create={E28Create}
          show={E28Show}
        />
        <Resource
          name="E29"
          list={E29List}
          edit={E29Edit}
          create={E29Create}
          show={E29Show}
        />
        <Resource
          name="E30"
          list={E30List}
          edit={E30Edit}
          create={E30Create}
          show={E30Show}
        />
        <Resource
          name="E31"
          list={E31List}
          edit={E31Edit}
          create={E31Create}
          show={E31Show}
        />
        <Resource
          name="E32"
          list={E32List}
          edit={E32Edit}
          create={E32Create}
          show={E32Show}
        />
        <Resource
          name="E33"
          list={E33List}
          edit={E33Edit}
          create={E33Create}
          show={E33Show}
        />
        <Resource
          name="E34"
          list={E34List}
          edit={E34Edit}
          create={E34Create}
          show={E34Show}
        />
        <Resource
          name="E35"
          list={E35List}
          edit={E35Edit}
          create={E35Create}
          show={E35Show}
        />
        <Resource
          name="E36"
          list={E36List}
          edit={E36Edit}
          create={E36Create}
          show={E36Show}
        />
        <Resource
          name="E37"
          list={E37List}
          edit={E37Edit}
          create={E37Create}
          show={E37Show}
        />
        <Resource
          name="E38"
          list={E38List}
          edit={E38Edit}
          create={E38Create}
          show={E38Show}
        />
        <Resource
          name="E39"
          list={E39List}
          edit={E39Edit}
          create={E39Create}
          show={E39Show}
        />
        <Resource
          name="E40"
          list={E40List}
          edit={E40Edit}
          create={E40Create}
          show={E40Show}
        />
        <Resource
          name="E41"
          list={E41List}
          edit={E41Edit}
          create={E41Create}
          show={E41Show}
        />
        <Resource
          name="E42"
          list={E42List}
          edit={E42Edit}
          create={E42Create}
          show={E42Show}
        />
        <Resource
          name="E43"
          list={E43List}
          edit={E43Edit}
          create={E43Create}
          show={E43Show}
        />
        <Resource
          name="E44"
          list={E44List}
          edit={E44Edit}
          create={E44Create}
          show={E44Show}
        />
        <Resource
          name="E45"
          list={E45List}
          edit={E45Edit}
          create={E45Create}
          show={E45Show}
        />
        <Resource
          name="E46"
          list={E46List}
          edit={E46Edit}
          create={E46Create}
          show={E46Show}
        />
        <Resource
          name="E47"
          list={E47List}
          edit={E47Edit}
          create={E47Create}
          show={E47Show}
        />
        <Resource
          name="E48"
          list={E48List}
          edit={E48Edit}
          create={E48Create}
          show={E48Show}
        />
        <Resource
          name="E49"
          list={E49List}
          edit={E49Edit}
          create={E49Create}
          show={E49Show}
        />
        <Resource
          name="E50"
          list={E50List}
          edit={E50Edit}
          create={E50Create}
          show={E50Show}
        />
        <Resource
          name="E51"
          list={E51List}
          edit={E51Edit}
          create={E51Create}
          show={E51Show}
        />
        <Resource
          name="E52"
          list={E52List}
          edit={E52Edit}
          create={E52Create}
          show={E52Show}
        />
        <Resource
          name="E53"
          list={E53List}
          edit={E53Edit}
          create={E53Create}
          show={E53Show}
        />
        <Resource
          name="E54"
          list={E54List}
          edit={E54Edit}
          create={E54Create}
          show={E54Show}
        />
        <Resource
          name="E55"
          list={E55List}
          edit={E55Edit}
          create={E55Create}
          show={E55Show}
        />
        <Resource
          name="E56"
          list={E56List}
          edit={E56Edit}
          create={E56Create}
          show={E56Show}
        />
        <Resource
          name="E57"
          list={E57List}
          edit={E57Edit}
          create={E57Create}
          show={E57Show}
        />
        <Resource
          name="E58"
          list={E58List}
          edit={E58Edit}
          create={E58Create}
          show={E58Show}
        />
        <Resource
          name="E59"
          list={E59List}
          edit={E59Edit}
          create={E59Create}
          show={E59Show}
        />
        <Resource
          name="E60"
          list={E60List}
          edit={E60Edit}
          create={E60Create}
          show={E60Show}
        />
        <Resource
          name="E61"
          list={E61List}
          edit={E61Edit}
          create={E61Create}
          show={E61Show}
        />
        <Resource
          name="E62"
          list={E62List}
          edit={E62Edit}
          create={E62Create}
          show={E62Show}
        />
        <Resource
          name="E63"
          list={E63List}
          edit={E63Edit}
          create={E63Create}
          show={E63Show}
        />
        <Resource
          name="E64"
          list={E64List}
          edit={E64Edit}
          create={E64Create}
          show={E64Show}
        />
        <Resource
          name="E65"
          list={E65List}
          edit={E65Edit}
          create={E65Create}
          show={E65Show}
        />
        <Resource
          name="E66"
          list={E66List}
          edit={E66Edit}
          create={E66Create}
          show={E66Show}
        />
        <Resource
          name="E67"
          list={E67List}
          edit={E67Edit}
          create={E67Create}
          show={E67Show}
        />
        <Resource
          name="E68"
          list={E68List}
          edit={E68Edit}
          create={E68Create}
          show={E68Show}
        />
        <Resource
          name="E69"
          list={E69List}
          edit={E69Edit}
          create={E69Create}
          show={E69Show}
        />
        <Resource
          name="E70"
          list={E70List}
          edit={E70Edit}
          create={E70Create}
          show={E70Show}
        />
      </Admin>
    </div>
  );
};

export default App;
