# `dataGoogleKmsCryptoKeys` Submodule <a name="`dataGoogleKmsCryptoKeys` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeys <a name="DataGoogleKmsCryptoKeys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys google_kms_crypto_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeys(scope Construct, id *string, config DataGoogleKmsCryptoKeysConfig) DataGoogleKmsCryptoKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig">DataGoogleKmsCryptoKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig">DataGoogleKmsCryptoKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.DataGoogleKmsCryptoKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.DataGoogleKmsCryptoKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.DataGoogleKmsCryptoKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.DataGoogleKmsCryptoKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleKmsCryptoKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleKmsCryptoKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput">KeyRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys"></a>

```go
func Keys() DataGoogleKmsCryptoKeysKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput"></a>

```go
func KeyRingInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeysConfig <a name="DataGoogleKmsCryptoKeysConfig" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

&datagooglekmscryptokeys.DataGoogleKmsCryptoKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyRing: *string,
	Filter: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing">KeyRing</a></code> | <code>*string</code> | The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing"></a>

```go
KeyRing *string
```

- *Type:* *string

The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys#key_ring DataGoogleKmsCryptoKeys#key_ring}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:.

* "name:my-key-" will retrieve keys that contain "my-key-" anywhere in their name. Note: names take the form projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}.
* "name=projects/my-project/locations/global/keyRings/my-key-ring/cryptoKeys/my-key-1" will only retrieve a key with that exact name.

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys#filter DataGoogleKmsCryptoKeys#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeysKeys <a name="DataGoogleKmsCryptoKeysKeys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

&datagooglekmscryptokeys.DataGoogleKmsCryptoKeysKeys {

}
```


### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

&datagooglekmscryptokeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy {

}
```


### DataGoogleKmsCryptoKeysKeysPrimary <a name="DataGoogleKmsCryptoKeysKeysPrimary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

&datagooglekmscryptokeys.DataGoogleKmsCryptoKeysKeysPrimary {

}
```


### DataGoogleKmsCryptoKeysKeysVersionTemplate <a name="DataGoogleKmsCryptoKeysKeysVersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

&datagooglekmscryptokeys.DataGoogleKmsCryptoKeysKeysVersionTemplate {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```go
func AllowedAccessReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy</a>

---


### DataGoogleKmsCryptoKeysKeysList <a name="DataGoogleKmsCryptoKeysKeysList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeysKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeysKeysOutputReference <a name="DataGoogleKmsCryptoKeysKeysOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeysKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend">CryptoKeyBackend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly">ImportOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyAccessJustificationsPolicy">KeyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CryptoKeyBackend`<sup>Required</sup> <a name="CryptoKeyBackend" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend"></a>

```go
func CryptoKeyBackend() *string
```

- *Type:* *string

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration"></a>

```go
func DestroyScheduledDuration() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly"></a>

```go
func ImportOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyAccessJustificationsPolicy`<sup>Required</sup> <a name="KeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyAccessJustificationsPolicy"></a>

```go
func KeyAccessJustificationsPolicy() DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList</a>

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary"></a>

```go
func Primary() DataGoogleKmsCryptoKeysKeysPrimaryList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a>

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation"></a>

```go
func SkipInitialVersionCreation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate"></a>

```go
func VersionTemplate() DataGoogleKmsCryptoKeysKeysVersionTemplateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeysKeys
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a>

---


### DataGoogleKmsCryptoKeysKeysPrimaryList <a name="DataGoogleKmsCryptoKeysKeysPrimaryList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysPrimaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeysKeysPrimaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeysKeysPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeysKeysPrimaryOutputReference <a name="DataGoogleKmsCryptoKeysKeysPrimaryOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysPrimaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeysKeysPrimaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeysKeysPrimary
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a>

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateList <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysVersionTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeysKeysVersionTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglekmscryptokeys"

datagooglekmscryptokeys.NewDataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeysKeysVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a>

---



