# `googleApigeeApiProduct` Submodule <a name="`googleApigeeApiProduct` Submodule" id="@cdktf/provider-google-beta.googleApigeeApiProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeApiProduct <a name="GoogleApigeeApiProduct" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product google_apigee_api_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProduct(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  name: str,
  org_id: str,
  api_resources: typing.List[str] = None,
  approval_type: str = None,
  attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]] = None,
  description: str = None,
  environments: typing.List[str] = None,
  graphql_operation_group: GoogleApigeeApiProductGraphqlOperationGroup = None,
  grpc_operation_group: GoogleApigeeApiProductGrpcOperationGroup = None,
  id: str = None,
  operation_group: GoogleApigeeApiProductOperationGroup = None,
  proxies: typing.List[str] = None,
  quota: str = None,
  quota_counter_scope: str = None,
  quota_interval: str = None,
  quota_time_unit: str = None,
  scopes: typing.List[str] = None,
  space: str = None,
  timeouts: GoogleApigeeApiProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.name">name</a></code> | <code>str</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.approvalType">approval_type</a></code> | <code>str</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.environments">environments</a></code> | <code>typing.List[str]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.proxies">proxies</a></code> | <code>typing.List[str]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quota">quota</a></code> | <code>str</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaInterval">quota_interval</a></code> | <code>str</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.space">space</a></code> | <code>str</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.displayName"></a>

- *Type:* str

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#display_name GoogleApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.name"></a>

- *Type:* str

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#org_id GoogleApigeeApiProduct#org_id}

---

##### `api_resources`<sup>Optional</sup> <a name="api_resources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.apiResources"></a>

- *Type:* typing.List[str]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_resources GoogleApigeeApiProduct#api_resources}

---

##### `approval_type`<sup>Optional</sup> <a name="approval_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.approvalType"></a>

- *Type:* str

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#approval_type GoogleApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.attributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.description"></a>

- *Type:* str

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#description GoogleApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.environments"></a>

- *Type:* typing.List[str]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#environments GoogleApigeeApiProduct#environments}

---

##### `graphql_operation_group`<sup>Optional</sup> <a name="graphql_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.graphqlOperationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#graphql_operation_group GoogleApigeeApiProduct#graphql_operation_group}

---

##### `grpc_operation_group`<sup>Optional</sup> <a name="grpc_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.grpcOperationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#grpc_operation_group GoogleApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_group`<sup>Optional</sup> <a name="operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.operationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_group GoogleApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.proxies"></a>

- *Type:* typing.List[str]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#proxies GoogleApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quota"></a>

- *Type:* str

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

##### `quota_counter_scope`<sup>Optional</sup> <a name="quota_counter_scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaCounterScope"></a>

- *Type:* str

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_counter_scope GoogleApigeeApiProduct#quota_counter_scope}

---

##### `quota_interval`<sup>Optional</sup> <a name="quota_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaInterval"></a>

- *Type:* str

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_interval GoogleApigeeApiProduct#quota_interval}

---

##### `quota_time_unit`<sup>Optional</sup> <a name="quota_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.quotaTimeUnit"></a>

- *Type:* str

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_time_unit GoogleApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#scopes GoogleApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.space"></a>

- *Type:* str

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#space GoogleApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#timeouts GoogleApigeeApiProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup">put_graphql_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup">put_grpc_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup">put_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApiResources">reset_api_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApprovalType">reset_approval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetEnvironments">reset_environments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGraphqlOperationGroup">reset_graphql_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGrpcOperationGroup">reset_grpc_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOperationGroup">reset_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetProxies">reset_proxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaCounterScope">reset_quota_counter_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaInterval">reset_quota_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaTimeUnit">reset_quota_time_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetSpace">reset_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]

---

##### `put_graphql_operation_group` <a name="put_graphql_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup"></a>

```python
def put_graphql_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

###### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup.parameter.operationConfigType"></a>

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

##### `put_grpc_operation_group` <a name="put_grpc_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup"></a>

```python
def put_grpc_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]] = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

##### `put_operation_group` <a name="put_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup"></a>

```python
def put_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

###### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup.parameter.operationConfigType"></a>

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}.

---

##### `reset_api_resources` <a name="reset_api_resources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApiResources"></a>

```python
def reset_api_resources() -> None
```

##### `reset_approval_type` <a name="reset_approval_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApprovalType"></a>

```python
def reset_approval_type() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environments` <a name="reset_environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetEnvironments"></a>

```python
def reset_environments() -> None
```

##### `reset_graphql_operation_group` <a name="reset_graphql_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGraphqlOperationGroup"></a>

```python
def reset_graphql_operation_group() -> None
```

##### `reset_grpc_operation_group` <a name="reset_grpc_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGrpcOperationGroup"></a>

```python
def reset_grpc_operation_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation_group` <a name="reset_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOperationGroup"></a>

```python
def reset_operation_group() -> None
```

##### `reset_proxies` <a name="reset_proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetProxies"></a>

```python
def reset_proxies() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_quota_counter_scope` <a name="reset_quota_counter_scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaCounterScope"></a>

```python
def reset_quota_counter_scope() -> None
```

##### `reset_quota_interval` <a name="reset_quota_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaInterval"></a>

```python
def reset_quota_interval() -> None
```

##### `reset_quota_time_unit` <a name="reset_quota_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaTimeUnit"></a>

```python
def reset_quota_time_unit() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_space` <a name="reset_space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetSpace"></a>

```python
def reset_space() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeApiProduct resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeApiProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeApiProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeApiProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeApiProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList">GoogleApigeeApiProductAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference">GoogleApigeeApiProductGrpcOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference">GoogleApigeeApiProductOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference">GoogleApigeeApiProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResourcesInput">api_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalTypeInput">approval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environmentsInput">environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroupInput">graphql_operation_group_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroupInput">grpc_operation_group_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroupInput">operation_group_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxiesInput">proxies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScopeInput">quota_counter_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInput">quota_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaIntervalInput">quota_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnitInput">quota_time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalType">approval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environments">environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quota">quota</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInterval">quota_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.space">space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributes"></a>

```python
attributes: GoogleApigeeApiProductAttributesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList">GoogleApigeeApiProductAttributesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `graphql_operation_group`<sup>Required</sup> <a name="graphql_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroup"></a>

```python
graphql_operation_group: GoogleApigeeApiProductGraphqlOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOutputReference</a>

---

##### `grpc_operation_group`<sup>Required</sup> <a name="grpc_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroup"></a>

```python
grpc_operation_group: GoogleApigeeApiProductGrpcOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference">GoogleApigeeApiProductGrpcOperationGroupOutputReference</a>

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `operation_group`<sup>Required</sup> <a name="operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroup"></a>

```python
operation_group: GoogleApigeeApiProductOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference">GoogleApigeeApiProductOperationGroupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeouts"></a>

```python
timeouts: GoogleApigeeApiProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference">GoogleApigeeApiProductTimeoutsOutputReference</a>

---

##### `api_resources_input`<sup>Optional</sup> <a name="api_resources_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResourcesInput"></a>

```python
api_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approval_type_input`<sup>Optional</sup> <a name="approval_type_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalTypeInput"></a>

```python
approval_type_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environmentsInput"></a>

```python
environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `graphql_operation_group_input`<sup>Optional</sup> <a name="graphql_operation_group_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroupInput"></a>

```python
graphql_operation_group_input: GoogleApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

---

##### `grpc_operation_group_input`<sup>Optional</sup> <a name="grpc_operation_group_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroupInput"></a>

```python
grpc_operation_group_input: GoogleApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_group_input`<sup>Optional</sup> <a name="operation_group_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroupInput"></a>

```python
operation_group_input: GoogleApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `proxies_input`<sup>Optional</sup> <a name="proxies_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxiesInput"></a>

```python
proxies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota_counter_scope_input`<sup>Optional</sup> <a name="quota_counter_scope_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScopeInput"></a>

```python
quota_counter_scope_input: str
```

- *Type:* str

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInput"></a>

```python
quota_input: str
```

- *Type:* str

---

##### `quota_interval_input`<sup>Optional</sup> <a name="quota_interval_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaIntervalInput"></a>

```python
quota_interval_input: str
```

- *Type:* str

---

##### `quota_time_unit_input`<sup>Optional</sup> <a name="quota_time_unit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnitInput"></a>

```python
quota_time_unit_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeApiProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>]

---

##### `api_resources`<sup>Required</sup> <a name="api_resources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResources"></a>

```python
api_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approval_type`<sup>Required</sup> <a name="approval_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quota"></a>

```python
quota: str
```

- *Type:* str

---

##### `quota_counter_scope`<sup>Required</sup> <a name="quota_counter_scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScope"></a>

```python
quota_counter_scope: str
```

- *Type:* str

---

##### `quota_interval`<sup>Required</sup> <a name="quota_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInterval"></a>

```python
quota_interval: str
```

- *Type:* str

---

##### `quota_time_unit`<sup>Required</sup> <a name="quota_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnit"></a>

```python
quota_time_unit: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.space"></a>

```python
space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeApiProductAttributes <a name="GoogleApigeeApiProductAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductConfig <a name="GoogleApigeeApiProductConfig" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  name: str,
  org_id: str,
  api_resources: typing.List[str] = None,
  approval_type: str = None,
  attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]] = None,
  description: str = None,
  environments: typing.List[str] = None,
  graphql_operation_group: GoogleApigeeApiProductGraphqlOperationGroup = None,
  grpc_operation_group: GoogleApigeeApiProductGrpcOperationGroup = None,
  id: str = None,
  operation_group: GoogleApigeeApiProductOperationGroup = None,
  proxies: typing.List[str] = None,
  quota: str = None,
  quota_counter_scope: str = None,
  quota_interval: str = None,
  quota_time_unit: str = None,
  scopes: typing.List[str] = None,
  space: str = None,
  timeouts: GoogleApigeeApiProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.displayName">display_name</a></code> | <code>str</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.name">name</a></code> | <code>str</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.approvalType">approval_type</a></code> | <code>str</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.description">description</a></code> | <code>str</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.environments">environments</a></code> | <code>typing.List[str]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quota">quota</a></code> | <code>str</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaInterval">quota_interval</a></code> | <code>str</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.space">space</a></code> | <code>str</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#display_name GoogleApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#org_id GoogleApigeeApiProduct#org_id}

---

##### `api_resources`<sup>Optional</sup> <a name="api_resources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.apiResources"></a>

```python
api_resources: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_resources GoogleApigeeApiProduct#api_resources}

---

##### `approval_type`<sup>Optional</sup> <a name="approval_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#approval_type GoogleApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#description GoogleApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#environments GoogleApigeeApiProduct#environments}

---

##### `graphql_operation_group`<sup>Optional</sup> <a name="graphql_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.graphqlOperationGroup"></a>

```python
graphql_operation_group: GoogleApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#graphql_operation_group GoogleApigeeApiProduct#graphql_operation_group}

---

##### `grpc_operation_group`<sup>Optional</sup> <a name="grpc_operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.grpcOperationGroup"></a>

```python
grpc_operation_group: GoogleApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#grpc_operation_group GoogleApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_group`<sup>Optional</sup> <a name="operation_group" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.operationGroup"></a>

```python
operation_group: GoogleApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_group GoogleApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#proxies GoogleApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quota"></a>

```python
quota: str
```

- *Type:* str

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

##### `quota_counter_scope`<sup>Optional</sup> <a name="quota_counter_scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaCounterScope"></a>

```python
quota_counter_scope: str
```

- *Type:* str

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_counter_scope GoogleApigeeApiProduct#quota_counter_scope}

---

##### `quota_interval`<sup>Optional</sup> <a name="quota_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaInterval"></a>

```python
quota_interval: str
```

- *Type:* str

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_interval GoogleApigeeApiProduct#quota_interval}

---

##### `quota_time_unit`<sup>Optional</sup> <a name="quota_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaTimeUnit"></a>

```python
quota_time_unit: str
```

- *Type:* str

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_time_unit GoogleApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#scopes GoogleApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.space"></a>

```python
space: str
```

- *Type:* str

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#space GoogleApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeApiProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#timeouts GoogleApigeeApiProduct#timeouts}

---

### GoogleApigeeApiProductGraphqlOperationGroup <a name="GoogleApigeeApiProductGraphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

##### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]] = None,
  operations: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]] = None,
  quota: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota"></a>

```python
quota: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations(
  operation: str = None,
  operation_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation">operation</a></code> | <code>str</code> | GraphQL operation name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes">operation_types</a></code> | <code>typing.List[str]</code> | Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation"></a>

```python
operation: str
```

- *Type:* str

GraphQL operation name.

The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation GoogleApigeeApiProduct#operation}

---

##### `operation_types`<sup>Optional</sup> <a name="operation_types" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes"></a>

```python
operation_types: typing.List[str]
```

- *Type:* typing.List[str]

Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_types GoogleApigeeApiProduct#operation_types}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductGrpcOperationGroup <a name="GoogleApigeeApiProductGrpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigs <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]] = None,
  methods: typing.List[str] = None,
  quota: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy with which the gRPC operation and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods">methods</a></code> | <code>typing.List[str]</code> | List of unqualified gRPC method names for the proxy to which quota will be applied. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.service">service</a></code> | <code>str</code> | Required. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy with which the gRPC operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

List of unqualified gRPC method names for the proxy to which quota will be applied.

If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.

Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].

Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota"></a>

```python
quota: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.service"></a>

```python
service: str
```

- *Type:* str

Required.

gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#service GoogleApigeeApiProduct#service}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductOperationGroup <a name="GoogleApigeeApiProductOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

##### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

### GoogleApigeeApiProductOperationGroupOperationConfigs <a name="GoogleApigeeApiProductOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]] = None,
  operations: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsOperations]] = None,
  quota: GoogleApigeeApiProductOperationGroupOperationConfigsQuota = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.quota"></a>

```python
quota: GoogleApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsOperations <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations(
  methods: typing.List[str] = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.methods">methods</a></code> | <code>typing.List[str]</code> | Methods refers to the REST verbs, when none specified, all verb types are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.resource">resource</a></code> | <code>str</code> | Required. REST resource path associated with the API proxy or remote service. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Methods refers to the REST verbs, when none specified, all verb types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.resource"></a>

```python
resource: str
```

- *Type:* str

Required. REST resource path associated with the API proxy or remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#resource GoogleApigeeApiProduct#resource}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductTimeouts <a name="GoogleApigeeApiProductTimeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeApiProductAttributesList <a name="GoogleApigeeApiProductAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]]

---


### GoogleApigeeApiProductAttributesOutputReference <a name="GoogleApigeeApiProductAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes">reset_operation_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_operation_types` <a name="reset_operation_types" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes"></a>

```python
def reset_operation_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput">operation_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes">operation_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `operation_types_input`<sup>Optional</sup> <a name="operation_types_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput"></a>

```python
operation_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `operation_types`<sup>Required</sup> <a name="operation_types" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes"></a>

```python
operation_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations"></a>

```python
operations: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType">reset_operation_config_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```

##### `reset_operation_config_type` <a name="reset_operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType"></a>

```python
def reset_operation_config_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput">operation_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---

##### `operation_config_type_input`<sup>Optional</sup> <a name="operation_config_type_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```python
operation_config_type_input: str
```

- *Type:* str

---

##### `operation_config_type`<sup>Required</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

---


### GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductOperationGroupOperationConfigsOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations"></a>

```python
operations: GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: GoogleApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductOperationGroupOutputReference <a name="GoogleApigeeApiProductOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigType">reset_operation_config_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```

##### `reset_operation_config_type` <a name="reset_operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigType"></a>

```python
def reset_operation_config_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList">GoogleApigeeApiProductOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput">operation_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: GoogleApigeeApiProductOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList">GoogleApigeeApiProductOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[GoogleApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>]]

---

##### `operation_config_type_input`<sup>Optional</sup> <a name="operation_config_type_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```python
operation_config_type_input: str
```

- *Type:* str

---

##### `operation_config_type`<sup>Required</sup> <a name="operation_config_type" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

---


### GoogleApigeeApiProductTimeoutsOutputReference <a name="GoogleApigeeApiProductTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_api_product

googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeApiProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>]

---



