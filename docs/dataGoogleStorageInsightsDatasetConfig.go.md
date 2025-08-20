# `dataGoogleStorageInsightsDatasetConfig` Submodule <a name="`dataGoogleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageInsightsDatasetConfig <a name="DataGoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfig(scope Construct, id *string, config DataGoogleStorageInsightsDatasetConfigConfig) DataGoogleStorageInsightsDatasetConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageInsightsDatasetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState">DatasetConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset">LinkDataset</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope">OrganizationScope</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">DatasetConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatasetConfigState`<sup>Required</sup> <a name="DatasetConfigState" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```go
func DatasetConfigState() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludeCloudStorageBuckets`<sup>Required</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```go
func ExcludeCloudStorageBuckets() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a>

---

##### `ExcludeCloudStorageLocations`<sup>Required</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```go
func ExcludeCloudStorageLocations() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity"></a>

```go
func Identity() DataGoogleStorageInsightsDatasetConfigIdentityList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a>

---

##### `IncludeCloudStorageBuckets`<sup>Required</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```go
func IncludeCloudStorageBuckets() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a>

---

##### `IncludeCloudStorageLocations`<sup>Required</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```go
func IncludeCloudStorageLocations() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a>

---

##### `IncludeNewlyCreatedBuckets`<sup>Required</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```go
func IncludeNewlyCreatedBuckets() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link"></a>

```go
func Link() DataGoogleStorageInsightsDatasetConfigLinkList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `LinkDataset`<sup>Required</sup> <a name="LinkDataset" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```go
func LinkDataset() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationNumber`<sup>Required</sup> <a name="OrganizationNumber" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```go
func OrganizationNumber() *string
```

- *Type:* *string

---

##### `OrganizationScope`<sup>Required</sup> <a name="OrganizationScope" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```go
func OrganizationScope() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```go
func RetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `SourceFolders`<sup>Required</sup> <a name="SourceFolders" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```go
func SourceFolders() DataGoogleStorageInsightsDatasetConfigSourceFoldersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a>

---

##### `SourceProjects`<sup>Required</sup> <a name="SourceProjects" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```go
func SourceProjects() DataGoogleStorageInsightsDatasetConfigSourceProjectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DatasetConfigIdInput`<sup>Optional</sup> <a name="DatasetConfigIdInput" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```go
func DatasetConfigIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```go
func DatasetConfigId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageInsightsDatasetConfigConfig <a name="DataGoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetConfigId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>*string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```go
DatasetConfigId *string
```

- *Type:* *string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#dataset_config_id DataGoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#location DataGoogleStorageInsightsDatasetConfig#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/data-sources/google_storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}.

---

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets {

}
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {

}
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations {

}
```


### DataGoogleStorageInsightsDatasetConfigIdentity <a name="DataGoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigIdentity {

}
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets {

}
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {

}
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations {

}
```


### DataGoogleStorageInsightsDatasetConfigLink <a name="DataGoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigLink {

}
```


### DataGoogleStorageInsightsDatasetConfigSourceFolders <a name="DataGoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigSourceFolders {

}
```


### DataGoogleStorageInsightsDatasetConfigSourceProjects <a name="DataGoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

&datagooglestorageinsightsdatasetconfig.DataGoogleStorageInsightsDatasetConfigSourceProjects {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```go
func BucketPrefixRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```go
func CloudStorageBuckets() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigIdentityList <a name="DataGoogleStorageInsightsDatasetConfigIdentityList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigIdentity
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```go
func BucketPrefixRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```go
func CloudStorageBuckets() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigLinkList <a name="DataGoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigLinkOutputReference <a name="DataGoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">Linked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Linked`<sup>Required</sup> <a name="Linked" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```go
func Linked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigLink
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersList <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigSourceFoldersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigSourceFoldersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">FolderNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderNumbers`<sup>Required</sup> <a name="FolderNumbers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```go
func FolderNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigSourceFolders
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsList <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsList" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigSourceProjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageInsightsDatasetConfigSourceProjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestorageinsightsdatasetconfig"

datagooglestorageinsightsdatasetconfig.NewDataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">ProjectNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectNumbers`<sup>Required</sup> <a name="ProjectNumbers" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```go
func ProjectNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageInsightsDatasetConfigSourceProjects
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a>

---



