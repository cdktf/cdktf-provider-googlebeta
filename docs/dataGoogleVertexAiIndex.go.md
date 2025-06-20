# `dataGoogleVertexAiIndex` Submodule <a name="`dataGoogleVertexAiIndex` Submodule" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiIndex <a name="DataGoogleVertexAiIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndex(scope Construct, id *string, config DataGoogleVertexAiIndexConfig) DataGoogleVertexAiIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig">DataGoogleVertexAiIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig">DataGoogleVertexAiIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.DataGoogleVertexAiIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.DataGoogleVertexAiIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.DataGoogleVertexAiIndex_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.DataGoogleVertexAiIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleVertexAiIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleVertexAiIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes">DeployedIndexes</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats">IndexStats</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod">IndexUpdateMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri">MetadataSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeployedIndexes`<sup>Required</sup> <a name="DeployedIndexes" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes"></a>

```go
func DeployedIndexes() DataGoogleVertexAiIndexDeployedIndexesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IndexStats`<sup>Required</sup> <a name="IndexStats" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats"></a>

```go
func IndexStats() DataGoogleVertexAiIndexIndexStatsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a>

---

##### `IndexUpdateMethod`<sup>Required</sup> <a name="IndexUpdateMethod" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod"></a>

```go
func IndexUpdateMethod() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata"></a>

```go
func Metadata() DataGoogleVertexAiIndexMetadataList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a>

---

##### `MetadataSchemaUri`<sup>Required</sup> <a name="MetadataSchemaUri" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri"></a>

```go
func MetadataSchemaUri() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiIndexConfig <a name="DataGoogleVertexAiIndexConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region">Region</a></code> | <code>*string</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#id DataGoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#project DataGoogleVertexAiIndex#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#name DataGoogleVertexAiIndex#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#region DataGoogleVertexAiIndex#region}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#id DataGoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_vertex_ai_index#project DataGoogleVertexAiIndex#project}.

---

### DataGoogleVertexAiIndexDeployedIndexes <a name="DataGoogleVertexAiIndexDeployedIndexes" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexDeployedIndexes {

}
```


### DataGoogleVertexAiIndexIndexStats <a name="DataGoogleVertexAiIndexIndexStats" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexIndexStats {

}
```


### DataGoogleVertexAiIndexMetadata <a name="DataGoogleVertexAiIndexMetadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexMetadata {

}
```


### DataGoogleVertexAiIndexMetadataConfig <a name="DataGoogleVertexAiIndexMetadataConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexMetadataConfig {

}
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig {

}
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig {

}
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

&datagooglevertexaiindex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVertexAiIndexDeployedIndexesList <a name="DataGoogleVertexAiIndexDeployedIndexesList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexDeployedIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexDeployedIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexDeployedIndexesOutputReference <a name="DataGoogleVertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexDeployedIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexDeployedIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">DeployedIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedIndexId`<sup>Required</sup> <a name="DeployedIndexId" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```go
func DeployedIndexId() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexDeployedIndexes
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a>

---


### DataGoogleVertexAiIndexIndexStatsList <a name="DataGoogleVertexAiIndexIndexStatsList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexIndexStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexIndexStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexIndexStatsOutputReference <a name="DataGoogleVertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexIndexStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexIndexStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount">ShardsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount">VectorsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShardsCount`<sup>Required</sup> <a name="ShardsCount" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```go
func ShardsCount() *f64
```

- *Type:* *f64

---

##### `VectorsCount`<sup>Required</sup> <a name="VectorsCount" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```go
func VectorsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexIndexStats
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BruteForceConfig`<sup>Required</sup> <a name="BruteForceConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```go
func BruteForceConfig() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a>

---

##### `TreeAhConfig`<sup>Required</sup> <a name="TreeAhConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```go
func TreeAhConfig() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">LeafNodesToSearchPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafNodeEmbeddingCount`<sup>Required</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```go
func LeafNodeEmbeddingCount() *f64
```

- *Type:* *f64

---

##### `LeafNodesToSearchPercent`<sup>Required</sup> <a name="LeafNodesToSearchPercent" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```go
func LeafNodesToSearchPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigList <a name="DataGoogleVertexAiIndexMetadataConfigList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexMetadataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexMetadataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexMetadataConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexMetadataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">AlgorithmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">ApproximateNeighborsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions">Dimensions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize">ShardSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmConfig`<sup>Required</sup> <a name="AlgorithmConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```go
func AlgorithmConfig() DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a>

---

##### `ApproximateNeighborsCount`<sup>Required</sup> <a name="ApproximateNeighborsCount" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```go
func ApproximateNeighborsCount() *f64
```

- *Type:* *f64

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```go
func Dimensions() *f64
```

- *Type:* *f64

---

##### `DistanceMeasureType`<sup>Required</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```go
func DistanceMeasureType() *string
```

- *Type:* *string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```go
func FeatureNormType() *string
```

- *Type:* *string

---

##### `ShardSize`<sup>Required</sup> <a name="ShardSize" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize"></a>

```go
func ShardSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a>

---


### DataGoogleVertexAiIndexMetadataList <a name="DataGoogleVertexAiIndexMetadataList" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleVertexAiIndexMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get"></a>

```go
func Get(index *f64) DataGoogleVertexAiIndexMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleVertexAiIndexMetadataOutputReference <a name="DataGoogleVertexAiIndexMetadataOutputReference" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglevertexaiindex"

datagooglevertexaiindex.NewDataGoogleVertexAiIndexMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleVertexAiIndexMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri">ContentsDeltaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">IsCompleteOverwrite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config"></a>

```go
func Config() DataGoogleVertexAiIndexMetadataConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a>

---

##### `ContentsDeltaUri`<sup>Required</sup> <a name="ContentsDeltaUri" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```go
func ContentsDeltaUri() *string
```

- *Type:* *string

---

##### `IsCompleteOverwrite`<sup>Required</sup> <a name="IsCompleteOverwrite" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```go
func IsCompleteOverwrite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleVertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a>

---



