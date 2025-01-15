# `googleFirestoreIndex` Submodule <a name="`googleFirestoreIndex` Submodule" id="@cdktf/provider-google-beta.googleFirestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreIndex <a name="GoogleFirestoreIndex" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndex(scope Construct, id *string, config GoogleFirestoreIndexConfig) GoogleFirestoreIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope">ResetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope">ResetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirestoreIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `ResetApiScope` <a name="ResetApiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope"></a>

```go
func ResetApiScope()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope"></a>

```go
func ResetQueryScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.GoogleFirestoreIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.GoogleFirestoreIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.GoogleFirestoreIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.GoogleFirestoreIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirestoreIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirestoreIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput">ApiScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput">QueryScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope">ApiScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope">QueryScope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields"></a>

```go
func Fields() GoogleFirestoreIndexFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts"></a>

```go
func Timeouts() GoogleFirestoreIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a>

---

##### `ApiScopeInput`<sup>Optional</sup> <a name="ApiScopeInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput"></a>

```go
func ApiScopeInput() *string
```

- *Type:* *string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput"></a>

```go
func QueryScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiScope`<sup>Required</sup> <a name="ApiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope"></a>

```go
func ApiScope() *string
```

- *Type:* *string

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope"></a>

```go
func QueryScope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreIndexConfig <a name="GoogleFirestoreIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

&googlefirestoreindex.GoogleFirestoreIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Collection: *string,
	Fields: interface{},
	ApiScope: *string,
	Database: *string,
	Id: *string,
	Project: *string,
	QueryScope: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection">Collection</a></code> | <code>*string</code> | The collection being indexed. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope">ApiScope</a></code> | <code>*string</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database">Database</a></code> | <code>*string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope">QueryScope</a></code> | <code>*string</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}

---

##### `ApiScope`<sup>Optional</sup> <a name="ApiScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope"></a>

```go
ApiScope *string
```

- *Type:* *string

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}.

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope"></a>

```go
QueryScope *string
```

- *Type:* *string

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts"></a>

```go
Timeouts GoogleFirestoreIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}

---

### GoogleFirestoreIndexFields <a name="GoogleFirestoreIndexFields" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

&googlefirestoreindex.GoogleFirestoreIndexFields {
	ArrayConfig: *string,
	FieldPath: *string,
	Order: *string,
	VectorConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath">FieldPath</a></code> | <code>*string</code> | Name of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order">Order</a></code> | <code>*string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig"></a>

```go
ArrayConfig *string
```

- *Type:* *string

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#array_config GoogleFirestoreIndex#array_config}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#field_path GoogleFirestoreIndex#field_path}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order"></a>

```go
Order *string
```

- *Type:* *string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#order GoogleFirestoreIndex#order}

---

##### `VectorConfig`<sup>Optional</sup> <a name="VectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig"></a>

```go
VectorConfig GoogleFirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#vector_config GoogleFirestoreIndex#vector_config}

---

### GoogleFirestoreIndexFieldsVectorConfig <a name="GoogleFirestoreIndexFieldsVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

&googlefirestoreindex.GoogleFirestoreIndexFieldsVectorConfig {
	Dimension: *f64,
	Flat: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension">Dimension</a></code> | <code>*f64</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat">Flat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension"></a>

```go
Dimension *f64
```

- *Type:* *f64

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#dimension GoogleFirestoreIndex#dimension}

---

##### `Flat`<sup>Optional</sup> <a name="Flat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat"></a>

```go
Flat GoogleFirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#flat GoogleFirestoreIndex#flat}

---

### GoogleFirestoreIndexFieldsVectorConfigFlat <a name="GoogleFirestoreIndexFieldsVectorConfigFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

&googlefirestoreindex.GoogleFirestoreIndexFieldsVectorConfigFlat {

}
```


### GoogleFirestoreIndexTimeouts <a name="GoogleFirestoreIndexTimeouts" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

&googlefirestoreindex.GoogleFirestoreIndexTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreIndexFieldsList <a name="GoogleFirestoreIndexFieldsList" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndexFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirestoreIndexFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get"></a>

```go
func Get(index *f64) GoogleFirestoreIndexFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirestoreIndexFieldsOutputReference <a name="GoogleFirestoreIndexFieldsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndexFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirestoreIndexFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig">PutVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig">ResetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig">ResetVectorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVectorConfig` <a name="PutVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```go
func PutVectorConfig(value GoogleFirestoreIndexFieldsVectorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```go
func ResetArrayConfig()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetVectorConfig` <a name="ResetVectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```go
func ResetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput">VectorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VectorConfig`<sup>Required</sup> <a name="VectorConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```go
func VectorConfig() GoogleFirestoreIndexFieldsVectorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```go
func ArrayConfigInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `VectorConfigInput`<sup>Optional</sup> <a name="VectorConfigInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```go
func VectorConfigInput() GoogleFirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```go
func ArrayConfig() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndexFieldsVectorConfigFlatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---


### GoogleFirestoreIndexFieldsVectorConfigOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndexFieldsVectorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreIndexFieldsVectorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat">PutFlat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat">ResetFlat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlat` <a name="PutFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```go
func PutFlat(value GoogleFirestoreIndexFieldsVectorConfigFlat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetFlat` <a name="ResetFlat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```go
func ResetFlat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">FlatInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension">Dimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```go
func Flat() GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *f64
```

- *Type:* *f64

---

##### `FlatInput`<sup>Optional</sup> <a name="FlatInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```go
func FlatInput() GoogleFirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```go
func Dimension() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---


### GoogleFirestoreIndexTimeoutsOutputReference <a name="GoogleFirestoreIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoreindex"

googlefirestoreindex.NewGoogleFirestoreIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



