# `googleNetworkConnectivityPolicyBasedRoute` Submodule <a name="`googleNetworkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityPolicyBasedRoute <a name="GoogleNetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: GoogleNetworkConnectivityPolicyBasedRouteFilter,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  interconnect_attachment: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment = None,
  labels: typing.Mapping[str] = None,
  next_hop_ilb_ip: str = None,
  next_hop_other_routes: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleNetworkConnectivityPolicyBasedRouteTimeouts = None,
  virtual_machine: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment">interconnect_attachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp">next_hop_ilb_ip</a></code> | <code>str</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes">next_hop_other_routes</a></code> | <code>str</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.network"></a>

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect_attachment`<sup>Optional</sup> <a name="interconnect_attachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}

---

##### `next_hop_ilb_ip`<sup>Optional</sup> <a name="next_hop_ilb_ip" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp"></a>

- *Type:* str

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `next_hop_other_routes`<sup>Optional</sup> <a name="next_hop_other_routes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes"></a>

- *Type:* str

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">put_interconnect_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine">put_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">reset_interconnect_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">reset_next_hop_ilb_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">reset_next_hop_other_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine">reset_virtual_machine</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter"></a>

```python
def put_filter(
  protocol_version: str,
  dest_range: str = None,
  ip_protocol: str = None,
  src_range: str = None
) -> None
```

###### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.protocolVersion"></a>

- *Type:* str

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#protocol_version GoogleNetworkConnectivityPolicyBasedRoute#protocol_version}

---

###### `dest_range`<sup>Optional</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.destRange"></a>

- *Type:* str

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#dest_range GoogleNetworkConnectivityPolicyBasedRoute#dest_range}

---

###### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#ip_protocol GoogleNetworkConnectivityPolicyBasedRoute#ip_protocol}

---

###### `src_range`<sup>Optional</sup> <a name="src_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.srcRange"></a>

- *Type:* str

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#src_range GoogleNetworkConnectivityPolicyBasedRoute#src_range}

---

##### `put_interconnect_attachment` <a name="put_interconnect_attachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```python
def put_interconnect_attachment(
  region: str
) -> None
```

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.region"></a>

- *Type:* str

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#region GoogleNetworkConnectivityPolicyBasedRoute#region}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}.

---

##### `put_virtual_machine` <a name="put_virtual_machine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```python
def put_virtual_machine(
  tags: typing.List[str]
) -> None
```

###### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.tags"></a>

- *Type:* typing.List[str]

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#tags GoogleNetworkConnectivityPolicyBasedRoute#tags}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect_attachment` <a name="reset_interconnect_attachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```python
def reset_interconnect_attachment() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_next_hop_ilb_ip` <a name="reset_next_hop_ilb_ip" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```python
def reset_next_hop_ilb_ip() -> None
```

##### `reset_next_hop_other_routes` <a name="reset_next_hop_other_routes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```python
def reset_next_hop_other_routes() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_machine` <a name="reset_virtual_machine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```python
def reset_virtual_machine() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityPolicyBasedRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">interconnect_attachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">interconnect_attachment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">next_hop_ilb_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">next_hop_other_routes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">virtual_machine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">next_hop_ilb_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">next_hop_other_routes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter"></a>

```python
filter: GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `interconnect_attachment`<sup>Required</sup> <a name="interconnect_attachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```python
interconnect_attachment: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```python
virtual_machine: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```python
warnings: GoogleNetworkConnectivityPolicyBasedRouteWarningsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```python
filter_input: GoogleNetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_attachment_input`<sup>Optional</sup> <a name="interconnect_attachment_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```python
interconnect_attachment_input: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `next_hop_ilb_ip_input`<sup>Optional</sup> <a name="next_hop_ilb_ip_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```python
next_hop_ilb_ip_input: str
```

- *Type:* str

---

##### `next_hop_other_routes_input`<sup>Optional</sup> <a name="next_hop_other_routes_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```python
next_hop_other_routes_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkConnectivityPolicyBasedRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>]

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```python
virtual_machine_input: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `next_hop_ilb_ip`<sup>Required</sup> <a name="next_hop_ilb_ip" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```python
next_hop_ilb_ip: str
```

- *Type:* str

---

##### `next_hop_other_routes`<sup>Required</sup> <a name="next_hop_other_routes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```python
next_hop_other_routes: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityPolicyBasedRouteConfig <a name="GoogleNetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: GoogleNetworkConnectivityPolicyBasedRouteFilter,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  interconnect_attachment: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment = None,
  labels: typing.Mapping[str] = None,
  next_hop_ilb_ip: str = None,
  next_hop_other_routes: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleNetworkConnectivityPolicyBasedRouteTimeouts = None,
  virtual_machine: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">interconnect_attachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">next_hop_ilb_ip</a></code> | <code>str</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">next_hop_other_routes</a></code> | <code>str</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```python
filter: GoogleNetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect_attachment`<sup>Optional</sup> <a name="interconnect_attachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```python
interconnect_attachment: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}

---

##### `next_hop_ilb_ip`<sup>Optional</sup> <a name="next_hop_ilb_ip" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```python
next_hop_ilb_ip: str
```

- *Type:* str

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `next_hop_other_routes`<sup>Optional</sup> <a name="next_hop_other_routes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```python
next_hop_other_routes: str
```

- *Type:* str

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityPolicyBasedRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```python
virtual_machine: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### GoogleNetworkConnectivityPolicyBasedRouteFilter <a name="GoogleNetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter(
  protocol_version: str,
  dest_range: str = None,
  ip_protocol: str = None,
  src_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">protocol_version</a></code> | <code>str</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange">dest_range</a></code> | <code>str</code> | The destination IP range of outgoing packets that this policy-based route applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange">src_range</a></code> | <code>str</code> | The source IP range of outgoing packets that this policy-based route applies to. |

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#protocol_version GoogleNetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `dest_range`<sup>Optional</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#dest_range GoogleNetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#ip_protocol GoogleNetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `src_range`<sup>Optional</sup> <a name="src_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```python
src_range: str
```

- *Type:* str

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#src_range GoogleNetworkConnectivityPolicyBasedRoute#src_range}

---

### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment(
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">region</a></code> | <code>str</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#region GoogleNetworkConnectivityPolicyBasedRoute#region}

---

### GoogleNetworkConnectivityPolicyBasedRouteTimeouts <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}.

---

### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine(
  tags: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_policy_based_route#tags GoogleNetworkConnectivityPolicyBasedRoute#tags}

---

### GoogleNetworkConnectivityPolicyBasedRouteWarnings <a name="GoogleNetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">reset_dest_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">reset_ip_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">reset_src_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dest_range` <a name="reset_dest_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```python
def reset_dest_range() -> None
```

##### `reset_ip_protocol` <a name="reset_ip_protocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```python
def reset_ip_protocol() -> None
```

##### `reset_src_range` <a name="reset_src_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```python
def reset_src_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">dest_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">src_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">dest_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">src_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dest_range_input`<sup>Optional</sup> <a name="dest_range_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```python
dest_range_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `src_range_input`<sup>Optional</sup> <a name="src_range_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```python
src_range_input: str
```

- *Type:* str

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `src_range`<sup>Required</sup> <a name="src_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```python
src_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkConnectivityPolicyBasedRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>]

---


### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsList <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_policy_based_route

googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">warning_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `warning_message`<sup>Required</sup> <a name="warning_message" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```python
warning_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityPolicyBasedRouteWarnings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a>

---



