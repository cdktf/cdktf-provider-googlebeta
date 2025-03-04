# `dataGoogleCloudAssetResourcesSearchAll` Submodule <a name="`dataGoogleCloudAssetResourcesSearchAll` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetResourcesSearchAll <a name="DataGoogleCloudAssetResourcesSearchAll" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all google_cloud_asset_resources_search_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.NewDataGoogleCloudAssetResourcesSearchAll(scope Construct, id *string, config DataGoogleCloudAssetResourcesSearchAllConfig) DataGoogleCloudAssetResourcesSearchAll
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig">DataGoogleCloudAssetResourcesSearchAllConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig">DataGoogleCloudAssetResourcesSearchAllConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes"></a>

```go
func ResetAssetTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId"></a>

```go
func ResetId()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery"></a>

```go
func ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAll_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAll_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAll_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAll_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudAssetResourcesSearchAll to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudAssetResourcesSearchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetResourcesSearchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results">Results</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput">AssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results"></a>

```go
func Results() DataGoogleCloudAssetResourcesSearchAllResultsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a>

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput"></a>

```go
func AssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes"></a>

```go
func AssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetResourcesSearchAllConfig <a name="DataGoogleCloudAssetResourcesSearchAllConfig" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

&datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAllConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scope: *string,
	AssetTypes: *[]*string,
	Id: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}.

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes"></a>

```go
AssetTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}.

---

### DataGoogleCloudAssetResourcesSearchAllResults <a name="DataGoogleCloudAssetResourcesSearchAllResults" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

&datagooglecloudassetresourcessearchall.DataGoogleCloudAssetResourcesSearchAllResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetResourcesSearchAllResultsList <a name="DataGoogleCloudAssetResourcesSearchAllResultsList" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.NewDataGoogleCloudAssetResourcesSearchAllResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudAssetResourcesSearchAllResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudAssetResourcesSearchAllResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudAssetResourcesSearchAllResultsOutputReference <a name="DataGoogleCloudAssetResourcesSearchAllResultsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecloudassetresourcessearchall"

datagooglecloudassetresourcessearchall.NewDataGoogleCloudAssetResourcesSearchAllResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudAssetResourcesSearchAllResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes">AdditionalAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalAttributes`<sup>Required</sup> <a name="AdditionalAttributes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes"></a>

```go
func AdditionalAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags"></a>

```go
func NetworkTags() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudAssetResourcesSearchAllResults
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a>

---



