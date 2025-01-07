# `googleNetworkServicesAuthzExtension` Submodule <a name="`googleNetworkServicesAuthzExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAuthzExtension <a name="GoogleNetworkServicesAuthzExtension" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension google_network_services_authz_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authority: str,
  load_balancing_scheme: str,
  location: str,
  name: str,
  service: str,
  timeout: str,
  description: str = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  forward_headers: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesAuthzExtensionTimeouts = None,
  wire_format: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.authority">authority</a></code> | <code>str</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.wireFormat">wire_format</a></code> | <code>str</code> | The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.authority"></a>

- *Type:* str

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#authority GoogleNetworkServicesAuthzExtension#authority}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#load_balancing_scheme GoogleNetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#location GoogleNetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.name"></a>

- *Type:* str

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#name GoogleNetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.service"></a>

- *Type:* str

The reference to the service that runs the extension.

To configure a callout extension, service must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService} or https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#service GoogleNetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeout"></a>

- *Type:* str

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#timeout GoogleNetworkServicesAuthzExtension#timeout}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#description GoogleNetworkServicesAuthzExtension#description}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.failOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#fail_open GoogleNetworkServicesAuthzExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders"></a>

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#forward_headers GoogleNetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#labels GoogleNetworkServicesAuthzExtension#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#metadata GoogleNetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#timeouts GoogleNetworkServicesAuthzExtension#timeouts}

---

##### `wire_format`<sup>Optional</sup> <a name="wire_format" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.wireFormat"></a>

- *Type:* str

The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#wire_format GoogleNetworkServicesAuthzExtension#wire_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetWireFormat">reset_wire_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#create GoogleNetworkServicesAuthzExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#delete GoogleNetworkServicesAuthzExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#update GoogleNetworkServicesAuthzExtension#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wire_format` <a name="reset_wire_format" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetWireFormat"></a>

```python
def reset_wire_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesAuthzExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesAuthzExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAuthzExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference">GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authorityInput">authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormatInput">wire_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authority">authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormat">wire_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference">GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `authority_input`<sup>Optional</sup> <a name="authority_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authorityInput"></a>

```python
authority_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesAuthzExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>]

---

##### `wire_format_input`<sup>Optional</sup> <a name="wire_format_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormatInput"></a>

```python
wire_format_input: str
```

- *Type:* str

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authority"></a>

```python
authority: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `wire_format`<sup>Required</sup> <a name="wire_format" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormat"></a>

```python
wire_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAuthzExtensionConfig <a name="GoogleNetworkServicesAuthzExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authority: str,
  load_balancing_scheme: str,
  location: str,
  name: str,
  service: str,
  timeout: str,
  description: str = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  forward_headers: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesAuthzExtensionTimeouts = None,
  wire_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.authority">authority</a></code> | <code>str</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.name">name</a></code> | <code>str</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.wireFormat">wire_format</a></code> | <code>str</code> | The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.authority"></a>

```python
authority: str
```

- *Type:* str

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#authority GoogleNetworkServicesAuthzExtension#authority}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#load_balancing_scheme GoogleNetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#location GoogleNetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#name GoogleNetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension.

To configure a callout extension, service must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService} or https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#service GoogleNetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#timeout GoogleNetworkServicesAuthzExtension#timeout}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#description GoogleNetworkServicesAuthzExtension#description}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#fail_open GoogleNetworkServicesAuthzExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#forward_headers GoogleNetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#labels GoogleNetworkServicesAuthzExtension#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#metadata GoogleNetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAuthzExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#timeouts GoogleNetworkServicesAuthzExtension#timeouts}

---

##### `wire_format`<sup>Optional</sup> <a name="wire_format" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.wireFormat"></a>

```python
wire_format: str
```

- *Type:* str

The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#wire_format GoogleNetworkServicesAuthzExtension#wire_format}

---

### GoogleNetworkServicesAuthzExtensionTimeouts <a name="GoogleNetworkServicesAuthzExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#create GoogleNetworkServicesAuthzExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#delete GoogleNetworkServicesAuthzExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#update GoogleNetworkServicesAuthzExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#create GoogleNetworkServicesAuthzExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#delete GoogleNetworkServicesAuthzExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_authz_extension#update GoogleNetworkServicesAuthzExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_authz_extension

googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesAuthzExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>]

---



