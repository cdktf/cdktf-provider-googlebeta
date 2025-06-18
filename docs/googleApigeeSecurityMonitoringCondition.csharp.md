# `googleApigeeSecurityMonitoringCondition` Submodule <a name="`googleApigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityMonitoringCondition <a name="GoogleApigeeSecurityMonitoringCondition" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringCondition(Construct Scope, string Id, GoogleApigeeSecurityMonitoringConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources">PutIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources">ResetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncludeAllResources` <a name="PutIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```csharp
private void PutIncludeAllResources(GoogleApigeeSecurityMonitoringConditionIncludeAllResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeSecurityMonitoringConditionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeAllResources` <a name="ResetIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```csharp
private void ResetIncludeAllResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityMonitoringCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityMonitoringCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityMonitoringCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityMonitoringCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeSecurityMonitoringCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources">TotalDeployedResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources">TotalMonitoredResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput">ConditionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">IncludeAllResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId">ConditionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `IncludeAllResources`<sup>Required</sup> <a name="IncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference IncludeAllResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `TotalDeployedResources`<sup>Required</sup> <a name="TotalDeployedResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```csharp
public double TotalDeployedResources { get; }
```

- *Type:* double

---

##### `TotalMonitoredResources`<sup>Required</sup> <a name="TotalMonitoredResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```csharp
public double TotalMonitoredResources { get; }
```

- *Type:* double

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ConditionIdInput`<sup>Optional</sup> <a name="ConditionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```csharp
public string ConditionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeAllResourcesInput`<sup>Optional</sup> <a name="IncludeAllResourcesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId"></a>

```csharp
public string ConditionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityMonitoringConditionConfig <a name="GoogleApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringConditionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConditionId,
    string OrgId,
    string Profile,
    string Scope,
    string Id = null,
    GoogleApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResources = null,
    GoogleApigeeSecurityMonitoringConditionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId">ConditionId</a></code> | <code>string</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile">Profile</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope">Scope</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```csharp
public string ConditionId { get; set; }
```

- *Type:* string

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#condition_id GoogleApigeeSecurityMonitoringCondition#condition_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#org_id GoogleApigeeSecurityMonitoringCondition#org_id}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#profile GoogleApigeeSecurityMonitoringCondition#profile}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#scope GoogleApigeeSecurityMonitoringCondition#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeAllResources`<sup>Optional</sup> <a name="IncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#include_all_resources GoogleApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#timeouts GoogleApigeeSecurityMonitoringCondition#timeouts}

---

### GoogleApigeeSecurityMonitoringConditionIncludeAllResources <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringConditionIncludeAllResources {

};
```


### GoogleApigeeSecurityMonitoringConditionTimeouts <a name="GoogleApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringConditionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeSecurityMonitoringConditionIncludeAllResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



