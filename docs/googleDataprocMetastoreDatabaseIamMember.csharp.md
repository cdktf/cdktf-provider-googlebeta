# `googleDataprocMetastoreDatabaseIamMember` Submodule <a name="`googleDataprocMetastoreDatabaseIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreDatabaseIamMember <a name="GoogleDataprocMetastoreDatabaseIamMember" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member google_dataproc_metastore_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreDatabaseIamMember(Construct Scope, string Id, GoogleDataprocMetastoreDatabaseIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig">GoogleDataprocMetastoreDatabaseIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig">GoogleDataprocMetastoreDatabaseIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleDataprocMetastoreDatabaseIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreDatabaseIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreDatabaseIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreDatabaseIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreDatabaseIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocMetastoreDatabaseIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocMetastoreDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition"></a>

```csharp
public GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput"></a>

```csharp
public GoogleDataprocMetastoreDatabaseIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreDatabaseIamMemberCondition <a name="GoogleDataprocMetastoreDatabaseIamMemberCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreDatabaseIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}.

---

### GoogleDataprocMetastoreDatabaseIamMemberConfig <a name="GoogleDataprocMetastoreDatabaseIamMemberConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreDatabaseIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Member,
    string Role,
    string ServiceId,
    GoogleDataprocMetastoreDatabaseIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition"></a>

```csharp
public GoogleDataprocMetastoreDatabaseIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#condition GoogleDataprocMetastoreDatabaseIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference <a name="GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocMetastoreDatabaseIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---



