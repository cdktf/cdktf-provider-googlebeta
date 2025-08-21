# `googleComputeWireGroup` Submodule <a name="`googleComputeWireGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeWireGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeWireGroup <a name="GoogleComputeWireGroup" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group google_compute_wire_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroup(Construct Scope, string Id, GoogleComputeWireGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig">GoogleComputeWireGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig">GoogleComputeWireGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties">PutWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties">PutWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties">ResetWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties">ResetWireProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints"></a>

```csharp
private void PutEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeWireGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

---

##### `PutWireGroupProperties` <a name="PutWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties"></a>

```csharp
private void PutWireGroupProperties(GoogleComputeWireGroupWireGroupProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---

##### `PutWireProperties` <a name="PutWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties"></a>

```csharp
private void PutWireProperties(GoogleComputeWireGroupWireProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWireGroupProperties` <a name="ResetWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties"></a>

```csharp
private void ResetWireGroupProperties()
```

##### `ResetWireProperties` <a name="ResetWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties"></a>

```csharp
private void ResetWireProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeWireGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeWireGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeWireGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeWireGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeWireGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeWireGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeWireGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties">WireGroupProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires">Wires</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput">CrossSiteNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput">EndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput">WireGroupPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput">WirePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork">CrossSiteNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints"></a>

```csharp
public GoogleComputeWireGroupEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts"></a>

```csharp
public GoogleComputeWireGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a>

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology"></a>

```csharp
public GoogleComputeWireGroupTopologyList Topology { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a>

---

##### `WireGroupProperties`<sup>Required</sup> <a name="WireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties"></a>

```csharp
public GoogleComputeWireGroupWireGroupPropertiesOutputReference WireGroupProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a>

---

##### `WireProperties`<sup>Required</sup> <a name="WireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties"></a>

```csharp
public GoogleComputeWireGroupWirePropertiesOutputReference WireProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a>

---

##### `Wires`<sup>Required</sup> <a name="Wires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires"></a>

```csharp
public GoogleComputeWireGroupWiresList Wires { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput"></a>

```csharp
public object AdminEnabledInput { get; }
```

- *Type:* object

---

##### `CrossSiteNetworkInput`<sup>Optional</sup> <a name="CrossSiteNetworkInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput"></a>

```csharp
public string CrossSiteNetworkInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput"></a>

```csharp
public object EndpointsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WireGroupPropertiesInput`<sup>Optional</sup> <a name="WireGroupPropertiesInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput"></a>

```csharp
public GoogleComputeWireGroupWireGroupProperties WireGroupPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---

##### `WirePropertiesInput`<sup>Optional</sup> <a name="WirePropertiesInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput"></a>

```csharp
public GoogleComputeWireGroupWireProperties WirePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; }
```

- *Type:* object

---

##### `CrossSiteNetwork`<sup>Required</sup> <a name="CrossSiteNetwork" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork"></a>

```csharp
public string CrossSiteNetwork { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeWireGroupConfig <a name="GoogleComputeWireGroupConfig" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CrossSiteNetwork,
    string Name,
    object AdminEnabled = null,
    string Description = null,
    object Endpoints = null,
    string Id = null,
    string Project = null,
    GoogleComputeWireGroupTimeouts Timeouts = null,
    GoogleComputeWireGroupWireGroupProperties WireGroupProperties = null,
    GoogleComputeWireGroupWireProperties WireProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork">CrossSiteNetwork</a></code> | <code>string</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints">Endpoints</a></code> | <code>object</code> | endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties">WireGroupProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | wire_group_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CrossSiteNetwork`<sup>Required</sup> <a name="CrossSiteNetwork" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork"></a>

```csharp
public string CrossSiteNetwork { get; set; }
```

- *Type:* string

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#cross_site_network GoogleComputeWireGroup#cross_site_network}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#name GoogleComputeWireGroup#name}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; set; }
```

- *Type:* object

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#admin_enabled GoogleComputeWireGroup#admin_enabled}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#description GoogleComputeWireGroup#description}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints"></a>

```csharp
public object Endpoints { get; set; }
```

- *Type:* object

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#endpoints GoogleComputeWireGroup#endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts"></a>

```csharp
public GoogleComputeWireGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#timeouts GoogleComputeWireGroup#timeouts}

---

##### `WireGroupProperties`<sup>Optional</sup> <a name="WireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties"></a>

```csharp
public GoogleComputeWireGroupWireGroupProperties WireGroupProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

wire_group_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#wire_group_properties GoogleComputeWireGroup#wire_group_properties}

---

##### `WireProperties`<sup>Optional</sup> <a name="WireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties"></a>

```csharp
public GoogleComputeWireGroupWireProperties WireProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#wire_properties GoogleComputeWireGroup#wire_properties}

---

### GoogleComputeWireGroupEndpoints <a name="GoogleComputeWireGroupEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpoints {
    string Endpoint,
    object Interconnects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects">Interconnects</a></code> | <code>object</code> | interconnects block. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}.

---

##### `Interconnects`<sup>Optional</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects"></a>

```csharp
public object Interconnects { get; set; }
```

- *Type:* object

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#interconnects GoogleComputeWireGroup#interconnects}

---

### GoogleComputeWireGroupEndpointsInterconnects <a name="GoogleComputeWireGroupEndpointsInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpointsInterconnects {
    string InterconnectName,
    string Interconnect = null,
    double[] VlanTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName">InterconnectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect">Interconnect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags">VlanTags</a></code> | <code>double[]</code> | VLAN tags for the interconnect. |

---

##### `InterconnectName`<sup>Required</sup> <a name="InterconnectName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName"></a>

```csharp
public string InterconnectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect"></a>

```csharp
public string Interconnect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}.

---

##### `VlanTags`<sup>Optional</sup> <a name="VlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags"></a>

```csharp
public double[] VlanTags { get; set; }
```

- *Type:* double[]

VLAN tags for the interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#vlan_tags GoogleComputeWireGroup#vlan_tags}

---

### GoogleComputeWireGroupTimeouts <a name="GoogleComputeWireGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}.

---

### GoogleComputeWireGroupTopology <a name="GoogleComputeWireGroupTopology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopology {

};
```


### GoogleComputeWireGroupTopologyEndpoints <a name="GoogleComputeWireGroupTopologyEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopologyEndpoints {

};
```


### GoogleComputeWireGroupWireGroupProperties <a name="GoogleComputeWireGroupWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWireGroupProperties {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type">Type</a></code> | <code>string</code> | Type of wire group (enum). |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of wire group (enum).

WIRE: a single pseudowire over two Interconnect connections   with no redundancy.
REDUNDANT: two pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
BOX_AND_CROSS: four pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#type GoogleComputeWireGroup#type}

---

### GoogleComputeWireGroupWireProperties <a name="GoogleComputeWireGroupWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWireProperties {
    double BandwidthUnmetered = null,
    string FaultResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | The unmetered bandwidth setting. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse">FaultResponse</a></code> | <code>string</code> | Response when a fault is detected in a pseudowire: NONE: default. |

---

##### `BandwidthUnmetered`<sup>Optional</sup> <a name="BandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; set; }
```

- *Type:* double

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#bandwidth_unmetered GoogleComputeWireGroup#bandwidth_unmetered}

---

##### `FaultResponse`<sup>Optional</sup> <a name="FaultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse"></a>

```csharp
public string FaultResponse { get; set; }
```

- *Type:* string

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_wire_group#fault_response GoogleComputeWireGroup#fault_response}

---

### GoogleComputeWireGroupWires <a name="GoogleComputeWireGroupWires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWires {

};
```


### GoogleComputeWireGroupWiresEndpoints <a name="GoogleComputeWireGroupWiresEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresEndpoints {

};
```


### GoogleComputeWireGroupWiresWireProperties <a name="GoogleComputeWireGroupWiresWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresWireProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeWireGroupEndpointsInterconnectsList <a name="GoogleComputeWireGroupEndpointsInterconnectsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpointsInterconnectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get"></a>

```csharp
private GoogleComputeWireGroupEndpointsInterconnectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeWireGroupEndpointsInterconnectsOutputReference <a name="GoogleComputeWireGroupEndpointsInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpointsInterconnectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags">ResetVlanTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect"></a>

```csharp
private void ResetInterconnect()
```

##### `ResetVlanTags` <a name="ResetVlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags"></a>

```csharp
private void ResetVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput">InterconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput">InterconnectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput">VlanTagsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect">Interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName">InterconnectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags">VlanTags</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput"></a>

```csharp
public string InterconnectInput { get; }
```

- *Type:* string

---

##### `InterconnectNameInput`<sup>Optional</sup> <a name="InterconnectNameInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput"></a>

```csharp
public string InterconnectNameInput { get; }
```

- *Type:* string

---

##### `VlanTagsInput`<sup>Optional</sup> <a name="VlanTagsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput"></a>

```csharp
public double[] VlanTagsInput { get; }
```

- *Type:* double[]

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect"></a>

```csharp
public string Interconnect { get; }
```

- *Type:* string

---

##### `InterconnectName`<sup>Required</sup> <a name="InterconnectName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName"></a>

```csharp
public string InterconnectName { get; }
```

- *Type:* string

---

##### `VlanTags`<sup>Required</sup> <a name="VlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags"></a>

```csharp
public double[] VlanTags { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeWireGroupEndpointsList <a name="GoogleComputeWireGroupEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get"></a>

```csharp
private GoogleComputeWireGroupEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeWireGroupEndpointsOutputReference <a name="GoogleComputeWireGroupEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects">PutInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects">ResetInterconnects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterconnects` <a name="PutInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects"></a>

```csharp
private void PutInterconnects(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects.parameter.value"></a>

- *Type:* object

---

##### `ResetInterconnects` <a name="ResetInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects"></a>

```csharp
private void ResetInterconnects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects">Interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput">InterconnectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects"></a>

```csharp
public GoogleComputeWireGroupEndpointsInterconnectsList Interconnects { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `InterconnectsInput`<sup>Optional</sup> <a name="InterconnectsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput"></a>

```csharp
public object InterconnectsInput { get; }
```

- *Type:* object

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeWireGroupTimeoutsOutputReference <a name="GoogleComputeWireGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeWireGroupTopologyEndpointsList <a name="GoogleComputeWireGroupTopologyEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopologyEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get"></a>

```csharp
private GoogleComputeWireGroupTopologyEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeWireGroupTopologyEndpointsOutputReference <a name="GoogleComputeWireGroupTopologyEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopologyEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupTopologyEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a>

---


### GoogleComputeWireGroupTopologyList <a name="GoogleComputeWireGroupTopologyList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get"></a>

```csharp
private GoogleComputeWireGroupTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeWireGroupTopologyOutputReference <a name="GoogleComputeWireGroupTopologyOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints"></a>

```csharp
public GoogleComputeWireGroupTopologyEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupTopology InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a>

---


### GoogleComputeWireGroupWireGroupPropertiesOutputReference <a name="GoogleComputeWireGroupWireGroupPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWireGroupPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupWireGroupProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---


### GoogleComputeWireGroupWirePropertiesOutputReference <a name="GoogleComputeWireGroupWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWirePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered">ResetBandwidthUnmetered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse">ResetFaultResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthUnmetered` <a name="ResetBandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered"></a>

```csharp
private void ResetBandwidthUnmetered()
```

##### `ResetFaultResponse` <a name="ResetFaultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse"></a>

```csharp
private void ResetFaultResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput">BandwidthUnmeteredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput">FaultResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse">FaultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthUnmeteredInput`<sup>Optional</sup> <a name="BandwidthUnmeteredInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput"></a>

```csharp
public double BandwidthUnmeteredInput { get; }
```

- *Type:* double

---

##### `FaultResponseInput`<sup>Optional</sup> <a name="FaultResponseInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput"></a>

```csharp
public string FaultResponseInput { get; }
```

- *Type:* string

---

##### `BandwidthUnmetered`<sup>Required</sup> <a name="BandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; }
```

- *Type:* double

---

##### `FaultResponse`<sup>Required</sup> <a name="FaultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse"></a>

```csharp
public string FaultResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupWireProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---


### GoogleComputeWireGroupWiresEndpointsList <a name="GoogleComputeWireGroupWiresEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get"></a>

```csharp
private GoogleComputeWireGroupWiresEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeWireGroupWiresEndpointsOutputReference <a name="GoogleComputeWireGroupWiresEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect">Interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect"></a>

```csharp
public string Interconnect { get; }
```

- *Type:* string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupWiresEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a>

---


### GoogleComputeWireGroupWiresList <a name="GoogleComputeWireGroupWiresList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get"></a>

```csharp
private GoogleComputeWireGroupWiresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeWireGroupWiresOutputReference <a name="GoogleComputeWireGroupWiresOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled"></a>

```csharp
public IResolvable AdminEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints"></a>

```csharp
public GoogleComputeWireGroupWiresEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `WireProperties`<sup>Required</sup> <a name="WireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties"></a>

```csharp
public GoogleComputeWireGroupWiresWirePropertiesList WireProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupWires InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a>

---


### GoogleComputeWireGroupWiresWirePropertiesList <a name="GoogleComputeWireGroupWiresWirePropertiesList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresWirePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get"></a>

```csharp
private GoogleComputeWireGroupWiresWirePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeWireGroupWiresWirePropertiesOutputReference <a name="GoogleComputeWireGroupWiresWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeWireGroupWiresWirePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse">FaultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthUnmetered`<sup>Required</sup> <a name="BandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; }
```

- *Type:* double

---

##### `FaultResponse`<sup>Required</sup> <a name="FaultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse"></a>

```csharp
public string FaultResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeWireGroupWiresWireProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a>

---



