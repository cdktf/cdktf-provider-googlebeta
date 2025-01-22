# `googleIntegrationConnectorsManagedZone` Submodule <a name="`googleIntegrationConnectorsManagedZone` Submodule" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsManagedZone <a name="GoogleIntegrationConnectorsManagedZone" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZone(Construct Scope, string Id, GoogleIntegrationConnectorsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig">GoogleIntegrationConnectorsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig">GoogleIntegrationConnectorsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIntegrationConnectorsManagedZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIntegrationConnectorsManagedZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput">DnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput">TargetVpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns">Dns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc">TargetVpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts"></a>

```csharp
public GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput"></a>

```csharp
public string DnsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `TargetVpcInput`<sup>Optional</sup> <a name="TargetVpcInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```csharp
public string TargetVpcInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns"></a>

```csharp
public string Dns { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc"></a>

```csharp
public string TargetVpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsManagedZoneConfig <a name="GoogleIntegrationConnectorsManagedZoneConfig" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dns,
    string Name,
    string TargetProject,
    string TargetVpc,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleIntegrationConnectorsManagedZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns">Dns</a></code> | <code>string</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject">TargetProject</a></code> | <code>string</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc">TargetVpc</a></code> | <code>string</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns"></a>

```csharp
public string Dns { get; set; }
```

- *Type:* string

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```csharp
public string TargetVpc { get; set; }
```

- *Type:* string

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```csharp
public GoogleIntegrationConnectorsManagedZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

### GoogleIntegrationConnectorsManagedZoneTimeouts <a name="GoogleIntegrationConnectorsManagedZoneTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



