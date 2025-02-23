# `googleBigtableTable` Submodule <a name="`googleBigtableTable` Submodule" id="@cdktf/provider-google-beta.googleBigtableTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableTable <a name="GoogleBigtableTable" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table google_bigtable_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.NewGoogleBigtableTable(scope Construct, id *string, config GoogleBigtableTableConfig) GoogleBigtableTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig">GoogleBigtableTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig">GoogleBigtableTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy">PutAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily">PutColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy">ResetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention">ResetChangeStreamRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily">ResetColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys">ResetSplitKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedBackupPolicy` <a name="PutAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy"></a>

```go
func PutAutomatedBackupPolicy(value GoogleBigtableTableAutomatedBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---

##### `PutColumnFamily` <a name="PutColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily"></a>

```go
func PutColumnFamily(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigtableTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

---

##### `ResetAutomatedBackupPolicy` <a name="ResetAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy"></a>

```go
func ResetAutomatedBackupPolicy()
```

##### `ResetChangeStreamRetention` <a name="ResetChangeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention"></a>

```go
func ResetChangeStreamRetention()
```

##### `ResetColumnFamily` <a name="ResetColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily"></a>

```go
func ResetColumnFamily()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSplitKeys` <a name="ResetSplitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys"></a>

```go
func ResetSplitKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.GoogleBigtableTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.GoogleBigtableTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.GoogleBigtableTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.GoogleBigtableTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigtableTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigtableTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput">AutomatedBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput">ChangeStreamRetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput">SplitKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention">ChangeStreamRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys">SplitKeys</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomatedBackupPolicy`<sup>Required</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy"></a>

```go
func AutomatedBackupPolicy() GoogleBigtableTableAutomatedBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a>

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily"></a>

```go
func ColumnFamily() GoogleBigtableTableColumnFamilyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts"></a>

```go
func Timeouts() GoogleBigtableTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a>

---

##### `AutomatedBackupPolicyInput`<sup>Optional</sup> <a name="AutomatedBackupPolicyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput"></a>

```go
func AutomatedBackupPolicyInput() GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---

##### `ChangeStreamRetentionInput`<sup>Optional</sup> <a name="ChangeStreamRetentionInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput"></a>

```go
func ChangeStreamRetentionInput() *string
```

- *Type:* *string

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput"></a>

```go
func ColumnFamilyInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SplitKeysInput`<sup>Optional</sup> <a name="SplitKeysInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput"></a>

```go
func SplitKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ChangeStreamRetention`<sup>Required</sup> <a name="ChangeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention"></a>

```go
func ChangeStreamRetention() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SplitKeys`<sup>Required</sup> <a name="SplitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys"></a>

```go
func SplitKeys() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableTableAutomatedBackupPolicy <a name="GoogleBigtableTableAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

&googlebigtabletable.GoogleBigtableTableAutomatedBackupPolicy {
	Frequency: *string,
	RetentionPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency">Frequency</a></code> | <code>*string</code> | How frequently automated backups should occur. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | How long the automated backups should be retained. |

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

How frequently automated backups should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#frequency GoogleBigtableTable#frequency}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod"></a>

```go
RetentionPeriod *string
```

- *Type:* *string

How long the automated backups should be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#retention_period GoogleBigtableTable#retention_period}

---

### GoogleBigtableTableColumnFamily <a name="GoogleBigtableTableColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

&googlebigtabletable.GoogleBigtableTableColumnFamily {
	Family: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family">Family</a></code> | <code>*string</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type">Type</a></code> | <code>*string</code> | The type of the column family. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family"></a>

```go
Family *string
```

- *Type:* *string

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#family GoogleBigtableTable#family}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#type GoogleBigtableTable#type}

---

### GoogleBigtableTableConfig <a name="GoogleBigtableTableConfig" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

&googlebigtabletable.GoogleBigtableTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	Name: *string,
	AutomatedBackupPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy,
	ChangeStreamRetention: *string,
	ColumnFamily: interface{},
	DeletionProtection: *string,
	Id: *string,
	Project: *string,
	SplitKeys: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigtableTable.GoogleBigtableTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name">Name</a></code> | <code>*string</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention">ChangeStreamRetention</a></code> | <code>*string</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily">ColumnFamily</a></code> | <code>interface{}</code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys">SplitKeys</a></code> | <code>*[]*string</code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#name GoogleBigtableTable#name}

---

##### `AutomatedBackupPolicy`<sup>Optional</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy"></a>

```go
AutomatedBackupPolicy GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#automated_backup_policy GoogleBigtableTable#automated_backup_policy}

---

##### `ChangeStreamRetention`<sup>Optional</sup> <a name="ChangeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention"></a>

```go
ChangeStreamRetention *string
```

- *Type:* *string

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#change_stream_retention GoogleBigtableTable#change_stream_retention}

---

##### `ColumnFamily`<sup>Optional</sup> <a name="ColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily"></a>

```go
ColumnFamily interface{}
```

- *Type:* interface{}

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#column_family GoogleBigtableTable#column_family}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection"></a>

```go
DeletionProtection *string
```

- *Type:* *string

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#deletion_protection GoogleBigtableTable#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#project GoogleBigtableTable#project}

---

##### `SplitKeys`<sup>Optional</sup> <a name="SplitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys"></a>

```go
SplitKeys *[]*string
```

- *Type:* *[]*string

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts"></a>

```go
Timeouts GoogleBigtableTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}

---

### GoogleBigtableTableTimeouts <a name="GoogleBigtableTableTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

&googlebigtabletable.GoogleBigtableTableTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableTableAutomatedBackupPolicyOutputReference <a name="GoogleBigtableTableAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.NewGoogleBigtableTableAutomatedBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigtableTableAutomatedBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---


### GoogleBigtableTableColumnFamilyList <a name="GoogleBigtableTableColumnFamilyList" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.NewGoogleBigtableTableColumnFamilyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigtableTableColumnFamilyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get"></a>

```go
func Get(index *f64) GoogleBigtableTableColumnFamilyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigtableTableColumnFamilyOutputReference <a name="GoogleBigtableTableColumnFamilyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.NewGoogleBigtableTableColumnFamilyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigtableTableColumnFamilyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigtableTableTimeoutsOutputReference <a name="GoogleBigtableTableTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigtabletable"

googlebigtabletable.NewGoogleBigtableTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigtableTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



