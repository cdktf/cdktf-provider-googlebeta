# `googleComputeRegionNetworkEndpointGroup` Submodule <a name="`googleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkEndpointGroup <a name="GoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  app_engine: GoogleComputeRegionNetworkEndpointGroupAppEngine = None,
  cloud_function: GoogleComputeRegionNetworkEndpointGroupCloudFunction = None,
  cloud_run: GoogleComputeRegionNetworkEndpointGroupCloudRun = None,
  description: str = None,
  id: str = None,
  network: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  psc_data: GoogleComputeRegionNetworkEndpointGroupPscData = None,
  psc_target_service: str = None,
  serverless_deployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment = None,
  subnetwork: str = None,
  timeouts: GoogleComputeRegionNetworkEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.network">network</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService">psc_target_service</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.serverlessDeployment">serverless_deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | serverless_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#name GoogleComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#region GoogleComputeRegionNetworkEndpointGroup#region}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#app_engine GoogleComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_function GoogleComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloud_run`<sup>Optional</sup> <a name="cloud_run" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_run GoogleComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#description GoogleComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.network"></a>

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network GoogleComputeRegionNetworkEndpointGroup#network}

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* str

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network_endpoint_type GoogleComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `psc_data`<sup>Optional</sup> <a name="psc_data" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.pscData"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_data GoogleComputeRegionNetworkEndpointGroup#psc_data}

---

##### `psc_target_service`<sup>Optional</sup> <a name="psc_target_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService"></a>

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_target_service GoogleComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `serverless_deployment`<sup>Optional</sup> <a name="serverless_deployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.serverlessDeployment"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

serverless_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#serverless_deployment GoogleComputeRegionNetworkEndpointGroup#serverless_deployment}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork"></a>

- *Type:* str

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#subnetwork GoogleComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#timeouts GoogleComputeRegionNetworkEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine">put_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction">put_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun">put_cloud_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData">put_psc_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment">put_serverless_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine">reset_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction">reset_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun">reset_cloud_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">reset_network_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData">reset_psc_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService">reset_psc_target_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment">reset_serverless_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_engine` <a name="put_app_engine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```python
def put_app_engine(
  service: str = None,
  url_mask: str = None,
  version: str = None
) -> None
```

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine.parameter.service"></a>

- *Type:* str

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine.parameter.urlMask"></a>

- *Type:* str

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine.parameter.version"></a>

- *Type:* str

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

##### `put_cloud_function` <a name="put_cloud_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```python
def put_cloud_function(
  function: str = None,
  url_mask: str = None
) -> None
```

###### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.function"></a>

- *Type:* str

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#function GoogleComputeRegionNetworkEndpointGroup#function}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.urlMask"></a>

- *Type:* str

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `put_cloud_run` <a name="put_cloud_run" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```python
def put_cloud_run(
  service: str = None,
  tag: str = None,
  url_mask: str = None
) -> None
```

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun.parameter.service"></a>

- *Type:* str

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun.parameter.tag"></a>

- *Type:* str

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#tag GoogleComputeRegionNetworkEndpointGroup#tag}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun.parameter.urlMask"></a>

- *Type:* str

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `put_psc_data` <a name="put_psc_data" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData"></a>

```python
def put_psc_data(
  producer_port: str = None
) -> None
```

###### `producer_port`<sup>Optional</sup> <a name="producer_port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData.parameter.producerPort"></a>

- *Type:* str

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#producer_port GoogleComputeRegionNetworkEndpointGroup#producer_port}

---

##### `put_serverless_deployment` <a name="put_serverless_deployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment"></a>

```python
def put_serverless_deployment(
  platform: str,
  resource: str = None,
  url_mask: str = None,
  version: str = None
) -> None
```

###### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.platform"></a>

- *Type:* str

The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#platform GoogleComputeRegionNetworkEndpointGroup#platform}

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.resource"></a>

- *Type:* str

The user-defined name of the workload/instance.

This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#resource GoogleComputeRegionNetworkEndpointGroup#resource}

---

###### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.urlMask"></a>

- *Type:* str

A template to parse platform-specific fields from a request URL.

URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.version"></a>

- *Type:* str

The optional resource version.

The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}.

---

##### `reset_app_engine` <a name="reset_app_engine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```python
def reset_app_engine() -> None
```

##### `reset_cloud_function` <a name="reset_cloud_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```python
def reset_cloud_function() -> None
```

##### `reset_cloud_run` <a name="reset_cloud_run" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```python
def reset_cloud_run() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_endpoint_type` <a name="reset_network_endpoint_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```python
def reset_network_endpoint_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_data` <a name="reset_psc_data" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData"></a>

```python
def reset_psc_data() -> None
```

##### `reset_psc_target_service` <a name="reset_psc_target_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```python
def reset_psc_target_service() -> None
```

##### `reset_serverless_deployment` <a name="reset_serverless_deployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment"></a>

```python
def reset_serverless_deployment() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionNetworkEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment">serverless_deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput">app_engine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">cloud_function_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput">cloud_run_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">network_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput">psc_data_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">psc_target_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput">serverless_deployment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">psc_target_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_engine`<sup>Required</sup> <a name="app_engine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```python
app_engine: GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```python
cloud_function: GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `cloud_run`<sup>Required</sup> <a name="cloud_run" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```python
cloud_run: GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `psc_data`<sup>Required</sup> <a name="psc_data" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData"></a>

```python
psc_data: GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `serverless_deployment`<sup>Required</sup> <a name="serverless_deployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment"></a>

```python
serverless_deployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `app_engine_input`<sup>Optional</sup> <a name="app_engine_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```python
app_engine_input: GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```python
cloud_function_input: GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `cloud_run_input`<sup>Optional</sup> <a name="cloud_run_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```python
cloud_run_input: GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_endpoint_type_input`<sup>Optional</sup> <a name="network_endpoint_type_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```python
network_endpoint_type_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_data_input`<sup>Optional</sup> <a name="psc_data_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput"></a>

```python
psc_data_input: GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---

##### `psc_target_service_input`<sup>Optional</sup> <a name="psc_target_service_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```python
psc_target_service_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `serverless_deployment_input`<sup>Optional</sup> <a name="serverless_deployment_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput"></a>

```python
serverless_deployment_input: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `psc_target_service`<sup>Required</sup> <a name="psc_target_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```python
psc_target_service: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngine <a name="GoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine(
  service: str = None,
  url_mask: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service">service</a></code> | <code>str</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version">version</a></code> | <code>str</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```python
service: str
```

- *Type:* str

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```python
version: str
```

- *Type:* str

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction(
  function: str = None,
  url_mask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function">function</a></code> | <code>str</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse function field from a request URL. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```python
function: str
```

- *Type:* str

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#function GoogleComputeRegionNetworkEndpointGroup#function}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupCloudRun <a name="GoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun(
  service: str = None,
  tag: str = None,
  url_mask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service">service</a></code> | <code>str</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag">tag</a></code> | <code>str</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse service and tag fields from a request URL. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```python
service: str
```

- *Type:* str

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```python
tag: str
```

- *Type:* str

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#tag GoogleComputeRegionNetworkEndpointGroup#tag}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupConfig <a name="GoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  app_engine: GoogleComputeRegionNetworkEndpointGroupAppEngine = None,
  cloud_function: GoogleComputeRegionNetworkEndpointGroupCloudFunction = None,
  cloud_run: GoogleComputeRegionNetworkEndpointGroupCloudRun = None,
  description: str = None,
  id: str = None,
  network: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  psc_data: GoogleComputeRegionNetworkEndpointGroupPscData = None,
  psc_target_service: str = None,
  serverless_deployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment = None,
  subnetwork: str = None,
  timeouts: GoogleComputeRegionNetworkEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun">cloud_run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network">network</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData">psc_data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">psc_target_service</a></code> | <code>str</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment">serverless_deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | serverless_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#name GoogleComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#region GoogleComputeRegionNetworkEndpointGroup#region}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```python
app_engine: GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#app_engine GoogleComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```python
cloud_function: GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_function GoogleComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloud_run`<sup>Optional</sup> <a name="cloud_run" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```python
cloud_run: GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_run GoogleComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#description GoogleComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```python
network: str
```

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network GoogleComputeRegionNetworkEndpointGroup#network}

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network_endpoint_type GoogleComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `psc_data`<sup>Optional</sup> <a name="psc_data" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData"></a>

```python
psc_data: GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_data GoogleComputeRegionNetworkEndpointGroup#psc_data}

---

##### `psc_target_service`<sup>Optional</sup> <a name="psc_target_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```python
psc_target_service: str
```

- *Type:* str

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_target_service GoogleComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `serverless_deployment`<sup>Optional</sup> <a name="serverless_deployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment"></a>

```python
serverless_deployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

serverless_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#serverless_deployment GoogleComputeRegionNetworkEndpointGroup#serverless_deployment}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#subnetwork GoogleComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#timeouts GoogleComputeRegionNetworkEndpointGroup#timeouts}

---

### GoogleComputeRegionNetworkEndpointGroupPscData <a name="GoogleComputeRegionNetworkEndpointGroupPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData(
  producer_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort">producer_port</a></code> | <code>str</code> | The PSC producer port to use when consumer PSC NEG connects to a producer. |

---

##### `producer_port`<sup>Optional</sup> <a name="producer_port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort"></a>

```python
producer_port: str
```

- *Type:* str

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#producer_port GoogleComputeRegionNetworkEndpointGroup#producer_port}

---

### GoogleComputeRegionNetworkEndpointGroupServerlessDeployment <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment(
  platform: str,
  resource: str = None,
  url_mask: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform">platform</a></code> | <code>str</code> | The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource">resource</a></code> | <code>str</code> | The user-defined name of the workload/instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask">url_mask</a></code> | <code>str</code> | A template to parse platform-specific fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version">version</a></code> | <code>str</code> | The optional resource version. |

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#platform GoogleComputeRegionNetworkEndpointGroup#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource"></a>

```python
resource: str
```

- *Type:* str

The user-defined name of the workload/instance.

This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#resource GoogleComputeRegionNetworkEndpointGroup#resource}

---

##### `url_mask`<sup>Optional</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

A template to parse platform-specific fields from a request URL.

URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version"></a>

```python
version: str
```

- *Type:* str

The optional resource version.

The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupTimeouts <a name="GoogleComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkEndpointGroupAppEngine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function` <a name="reset_function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkEndpointGroupCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkEndpointGroupCloudRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---


### GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort">reset_producer_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_producer_port` <a name="reset_producer_port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort"></a>

```python
def reset_producer_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput">producer_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort">producer_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `producer_port_input`<sup>Optional</sup> <a name="producer_port_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput"></a>

```python
producer_port_input: str
```

- *Type:* str

---

##### `producer_port`<sup>Required</sup> <a name="producer_port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort"></a>

```python
producer_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkEndpointGroupPscData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---


### GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask">reset_url_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_url_mask` <a name="reset_url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask"></a>

```python
def reset_url_mask() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput">url_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask">url_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `url_mask_input`<sup>Optional</sup> <a name="url_mask_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput"></a>

```python
url_mask_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `url_mask`<sup>Required</sup> <a name="url_mask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask"></a>

```python
url_mask: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---


### GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_network_endpoint_group

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>]

---



