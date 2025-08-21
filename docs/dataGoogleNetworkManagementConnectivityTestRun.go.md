# `dataGoogleNetworkManagementConnectivityTestRun` Submodule <a name="`dataGoogleNetworkManagementConnectivityTestRun` Submodule" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTestRun <a name="DataGoogleNetworkManagementConnectivityTestRun" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run google_network_management_connectivity_test_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRun(scope Construct, id *string, config DataGoogleNetworkManagementConnectivityTestRunConfig) DataGoogleNetworkManagementConnectivityTestRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRun_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRun_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTestRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleNetworkManagementConnectivityTestRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTestRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails">ReachabilityDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ReachabilityDetails`<sup>Required</sup> <a name="ReachabilityDetails" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails"></a>

```go
func ReachabilityDetails() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestRunConfig <a name="DataGoogleNetworkManagementConnectivityTestRunConfig" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

&datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#name DataGoogleNetworkManagementConnectivityTestRun#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/data-sources/google_network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}.

---

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

&datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails {

}
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

&datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces {

}
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

&datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo {

}
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

&datagooglenetworkmanagementconnectivitytestrun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces">Traces</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime">VerifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `Traces`<sup>Required</sup> <a name="Traces" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces"></a>

```go
func Traces() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a>

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime"></a>

```go
func VerifyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp">DestinationIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri">DestinationNetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri">SourceAgentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri">SourceNetworkUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIp`<sup>Required</sup> <a name="DestinationIp" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp"></a>

```go
func DestinationIp() *string
```

- *Type:* *string

---

##### `DestinationNetworkUri`<sup>Required</sup> <a name="DestinationNetworkUri" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri"></a>

```go
func DestinationNetworkUri() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAgentUri`<sup>Required</sup> <a name="SourceAgentUri" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri"></a>

```go
func SourceAgentUri() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceNetworkUri`<sup>Required</sup> <a name="SourceNetworkUri" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri"></a>

```go
func SourceNetworkUri() *string
```

- *Type:* *string

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo">EndpointInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId">ForwardTraceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInfo`<sup>Required</sup> <a name="EndpointInfo" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo"></a>

```go
func EndpointInfo() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a>

---

##### `ForwardTraceId`<sup>Required</sup> <a name="ForwardTraceId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId"></a>

```go
func ForwardTraceId() *f64
```

- *Type:* *f64

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps"></a>

```go
func Steps() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get"></a>

```go
func Get(index *f64) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglenetworkmanagementconnectivitytestrun"

datagooglenetworkmanagementconnectivitytestrun.NewDataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop">CausesDrop</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CausesDrop`<sup>Required</sup> <a name="CausesDrop" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop"></a>

```go
func CausesDrop() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a>

---



