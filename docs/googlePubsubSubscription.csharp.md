# `googlePubsubSubscription` Submodule <a name="`googlePubsubSubscription` Submodule" id="@cdktf/provider-google-beta.googlePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubSubscription <a name="GooglePubsubSubscription" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscription(Construct Scope, string Id, GooglePubsubSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig">GooglePubsubSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig">GooglePubsubSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig">PutBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig">PutCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy">PutDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy">PutExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig">PutPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds">ResetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig">ResetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig">ResetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy">ResetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery">ResetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering">ResetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy">ResetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration">ResetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig">ResetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages">ResetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryConfig` <a name="PutBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig"></a>

```csharp
private void PutBigqueryConfig(GooglePubsubSubscriptionBigqueryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `PutCloudStorageConfig` <a name="PutCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig"></a>

```csharp
private void PutCloudStorageConfig(GooglePubsubSubscriptionCloudStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `PutDeadLetterPolicy` <a name="PutDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy"></a>

```csharp
private void PutDeadLetterPolicy(GooglePubsubSubscriptionDeadLetterPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `PutExpirationPolicy` <a name="PutExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy"></a>

```csharp
private void PutExpirationPolicy(GooglePubsubSubscriptionExpirationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `PutPushConfig` <a name="PutPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig"></a>

```csharp
private void PutPushConfig(GooglePubsubSubscriptionPushConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(GooglePubsubSubscriptionRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePubsubSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

---

##### `ResetAckDeadlineSeconds` <a name="ResetAckDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetAckDeadlineSeconds"></a>

```csharp
private void ResetAckDeadlineSeconds()
```

##### `ResetBigqueryConfig` <a name="ResetBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetBigqueryConfig"></a>

```csharp
private void ResetBigqueryConfig()
```

##### `ResetCloudStorageConfig` <a name="ResetCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetCloudStorageConfig"></a>

```csharp
private void ResetCloudStorageConfig()
```

##### `ResetDeadLetterPolicy` <a name="ResetDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetDeadLetterPolicy"></a>

```csharp
private void ResetDeadLetterPolicy()
```

##### `ResetEnableExactlyOnceDelivery` <a name="ResetEnableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```csharp
private void ResetEnableExactlyOnceDelivery()
```

##### `ResetEnableMessageOrdering` <a name="ResetEnableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetEnableMessageOrdering"></a>

```csharp
private void ResetEnableMessageOrdering()
```

##### `ResetExpirationPolicy` <a name="ResetExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetExpirationPolicy"></a>

```csharp
private void ResetExpirationPolicy()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMessageRetentionDuration` <a name="ResetMessageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetMessageRetentionDuration"></a>

```csharp
private void ResetMessageRetentionDuration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPushConfig` <a name="ResetPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetPushConfig"></a>

```csharp
private void ResetPushConfig()
```

##### `ResetRetainAckedMessages` <a name="ResetRetainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetainAckedMessages"></a>

```csharp
private void ResetRetainAckedMessages()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GooglePubsubSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput">AckDeadlineSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput">BigqueryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput">CloudStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput">DeadLetterPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput">EnableExactlyOnceDeliveryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput">EnableMessageOrderingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput">ExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput">MessageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput">PushConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput">RetainAckedMessagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic">Topic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryConfig`<sup>Required</sup> <a name="BigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfig"></a>

```csharp
public GooglePubsubSubscriptionBigqueryConfigOutputReference BigqueryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference">GooglePubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `CloudStorageConfig`<sup>Required</sup> <a name="CloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfig"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfigOutputReference CloudStorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `DeadLetterPolicy`<sup>Required</sup> <a name="DeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicy"></a>

```csharp
public GooglePubsubSubscriptionDeadLetterPolicyOutputReference DeadLetterPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference">GooglePubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExpirationPolicy`<sup>Required</sup> <a name="ExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicy"></a>

```csharp
public GooglePubsubSubscriptionExpirationPolicyOutputReference ExpirationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference">GooglePubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `PushConfig`<sup>Required</sup> <a name="PushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfig"></a>

```csharp
public GooglePubsubSubscriptionPushConfigOutputReference PushConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference">GooglePubsubSubscriptionPushConfigOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicy"></a>

```csharp
public GooglePubsubSubscriptionRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference">GooglePubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeouts"></a>

```csharp
public GooglePubsubSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference">GooglePubsubSubscriptionTimeoutsOutputReference</a>

---

##### `AckDeadlineSecondsInput`<sup>Optional</sup> <a name="AckDeadlineSecondsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSecondsInput"></a>

```csharp
public double AckDeadlineSecondsInput { get; }
```

- *Type:* double

---

##### `BigqueryConfigInput`<sup>Optional</sup> <a name="BigqueryConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.bigqueryConfigInput"></a>

```csharp
public GooglePubsubSubscriptionBigqueryConfig BigqueryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---

##### `CloudStorageConfigInput`<sup>Optional</sup> <a name="CloudStorageConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.cloudStorageConfigInput"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfig CloudStorageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---

##### `DeadLetterPolicyInput`<sup>Optional</sup> <a name="DeadLetterPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.deadLetterPolicyInput"></a>

```csharp
public GooglePubsubSubscriptionDeadLetterPolicy DeadLetterPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---

##### `EnableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="EnableExactlyOnceDeliveryInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```csharp
public object EnableExactlyOnceDeliveryInput { get; }
```

- *Type:* object

---

##### `EnableMessageOrderingInput`<sup>Optional</sup> <a name="EnableMessageOrderingInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrderingInput"></a>

```csharp
public object EnableMessageOrderingInput { get; }
```

- *Type:* object

---

##### `ExpirationPolicyInput`<sup>Optional</sup> <a name="ExpirationPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.expirationPolicyInput"></a>

```csharp
public GooglePubsubSubscriptionExpirationPolicy ExpirationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MessageRetentionDurationInput`<sup>Optional</sup> <a name="MessageRetentionDurationInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDurationInput"></a>

```csharp
public string MessageRetentionDurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushConfigInput`<sup>Optional</sup> <a name="PushConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.pushConfigInput"></a>

```csharp
public GooglePubsubSubscriptionPushConfig PushConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---

##### `RetainAckedMessagesInput`<sup>Optional</sup> <a name="RetainAckedMessagesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessagesInput"></a>

```csharp
public object RetainAckedMessagesInput { get; }
```

- *Type:* object

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retryPolicyInput"></a>

```csharp
public GooglePubsubSubscriptionRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `AckDeadlineSeconds`<sup>Required</sup> <a name="AckDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```csharp
public double AckDeadlineSeconds { get; }
```

- *Type:* double

---

##### `EnableExactlyOnceDelivery`<sup>Required</sup> <a name="EnableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```csharp
public object EnableExactlyOnceDelivery { get; }
```

- *Type:* object

---

##### `EnableMessageOrdering`<sup>Required</sup> <a name="EnableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.enableMessageOrdering"></a>

```csharp
public object EnableMessageOrdering { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.messageRetentionDuration"></a>

```csharp
public string MessageRetentionDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RetainAckedMessages`<sup>Required</sup> <a name="RetainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.retainAckedMessages"></a>

```csharp
public object RetainAckedMessages { get; }
```

- *Type:* object

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubSubscriptionBigqueryConfig <a name="GooglePubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionBigqueryConfig {
    string Table,
    object DropUnknownFields = null,
    string ServiceAccountEmail = null,
    object UseTableSchema = null,
    object UseTopicSchema = null,
    object WriteMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table">Table</a></code> | <code>string</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields">DropUnknownFields</a></code> | <code>object</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema">UseTableSchema</a></code> | <code>object</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#table GooglePubsubSubscription#table}

---

##### `DropUnknownFields`<sup>Optional</sup> <a name="DropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```csharp
public object DropUnknownFields { get; set; }
```

- *Type:* object

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#drop_unknown_fields GooglePubsubSubscription#drop_unknown_fields}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The service account to use to write to BigQuery. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `UseTableSchema`<sup>Optional</sup> <a name="UseTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```csharp
public object UseTableSchema { get; set; }
```

- *Type:* object

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#use_table_schema GooglePubsubSubscription#use_table_schema}

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; set; }
```

- *Type:* object

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionCloudStorageConfig <a name="GooglePubsubSubscriptionCloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionCloudStorageConfig {
    string Bucket,
    GooglePubsubSubscriptionCloudStorageConfigAvroConfig AvroConfig = null,
    string FilenameDatetimeFormat = null,
    string FilenamePrefix = null,
    string FilenameSuffix = null,
    double MaxBytes = null,
    string MaxDuration = null,
    double MaxMessages = null,
    string ServiceAccountEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket">Bucket</a></code> | <code>string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix">FilenamePrefix</a></code> | <code>string</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix">FilenameSuffix</a></code> | <code>string</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes">MaxBytes</a></code> | <code>double</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration">MaxDuration</a></code> | <code>string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages">MaxMessages</a></code> | <code>double</code> | The maximum messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#bucket GooglePubsubSubscription#bucket}

---

##### `AvroConfig`<sup>Optional</sup> <a name="AvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig AvroConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#avro_config GooglePubsubSubscription#avro_config}

---

##### `FilenameDatetimeFormat`<sup>Optional</sup> <a name="FilenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```csharp
public string FilenameDatetimeFormat { get; set; }
```

- *Type:* string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#filename_datetime_format GooglePubsubSubscription#filename_datetime_format}

---

##### `FilenamePrefix`<sup>Optional</sup> <a name="FilenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```csharp
public string FilenamePrefix { get; set; }
```

- *Type:* string

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#filename_prefix GooglePubsubSubscription#filename_prefix}

---

##### `FilenameSuffix`<sup>Optional</sup> <a name="FilenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```csharp
public string FilenameSuffix { get; set; }
```

- *Type:* string

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#filename_suffix GooglePubsubSubscription#filename_suffix}

---

##### `MaxBytes`<sup>Optional</sup> <a name="MaxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```csharp
public double MaxBytes { get; set; }
```

- *Type:* double

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#max_bytes GooglePubsubSubscription#max_bytes}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```csharp
public string MaxDuration { get; set; }
```

- *Type:* string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#max_duration GooglePubsubSubscription#max_duration}

---

##### `MaxMessages`<sup>Optional</sup> <a name="MaxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```csharp
public double MaxMessages { get; set; }
```

- *Type:* double

The maximum messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#max_messages GooglePubsubSubscription#max_messages}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The service account to use to write to Cloud Storage. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

### GooglePubsubSubscriptionCloudStorageConfigAvroConfig <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionCloudStorageConfigAvroConfig {
    object UseTopicSchema = null,
    object WriteMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; set; }
```

- *Type:* object

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionConfig <a name="GooglePubsubSubscriptionConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Topic,
    double AckDeadlineSeconds = null,
    GooglePubsubSubscriptionBigqueryConfig BigqueryConfig = null,
    GooglePubsubSubscriptionCloudStorageConfig CloudStorageConfig = null,
    GooglePubsubSubscriptionDeadLetterPolicy DeadLetterPolicy = null,
    object EnableExactlyOnceDelivery = null,
    object EnableMessageOrdering = null,
    GooglePubsubSubscriptionExpirationPolicy ExpirationPolicy = null,
    string Filter = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MessageRetentionDuration = null,
    string Project = null,
    GooglePubsubSubscriptionPushConfig PushConfig = null,
    object RetainAckedMessages = null,
    GooglePubsubSubscriptionRetryPolicy RetryPolicy = null,
    GooglePubsubSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic">Topic</a></code> | <code>string</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>double</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>object</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>object</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter">Filter</a></code> | <code>string</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>object</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#name GooglePubsubSubscription#name}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#topic GooglePubsubSubscription#topic}

---

##### `AckDeadlineSeconds`<sup>Optional</sup> <a name="AckDeadlineSeconds" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```csharp
public double AckDeadlineSeconds { get; set; }
```

- *Type:* double

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#ack_deadline_seconds GooglePubsubSubscription#ack_deadline_seconds}

---

##### `BigqueryConfig`<sup>Optional</sup> <a name="BigqueryConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.bigqueryConfig"></a>

```csharp
public GooglePubsubSubscriptionBigqueryConfig BigqueryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#bigquery_config GooglePubsubSubscription#bigquery_config}

---

##### `CloudStorageConfig`<sup>Optional</sup> <a name="CloudStorageConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfig CloudStorageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#cloud_storage_config GooglePubsubSubscription#cloud_storage_config}

---

##### `DeadLetterPolicy`<sup>Optional</sup> <a name="DeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```csharp
public GooglePubsubSubscriptionDeadLetterPolicy DeadLetterPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#dead_letter_policy GooglePubsubSubscription#dead_letter_policy}

---

##### `EnableExactlyOnceDelivery`<sup>Optional</sup> <a name="EnableExactlyOnceDelivery" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```csharp
public object EnableExactlyOnceDelivery { get; set; }
```

- *Type:* object

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#enable_exactly_once_delivery GooglePubsubSubscription#enable_exactly_once_delivery}

---

##### `EnableMessageOrdering`<sup>Optional</sup> <a name="EnableMessageOrdering" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```csharp
public object EnableMessageOrdering { get; set; }
```

- *Type:* object

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#enable_message_ordering GooglePubsubSubscription#enable_message_ordering}

---

##### `ExpirationPolicy`<sup>Optional</sup> <a name="ExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.expirationPolicy"></a>

```csharp
public GooglePubsubSubscriptionExpirationPolicy ExpirationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#expiration_policy GooglePubsubSubscription#expiration_policy}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#filter GooglePubsubSubscription#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#labels GooglePubsubSubscription#labels}

---

##### `MessageRetentionDuration`<sup>Optional</sup> <a name="MessageRetentionDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```csharp
public string MessageRetentionDuration { get; set; }
```

- *Type:* string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#message_retention_duration GooglePubsubSubscription#message_retention_duration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}.

---

##### `PushConfig`<sup>Optional</sup> <a name="PushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.pushConfig"></a>

```csharp
public GooglePubsubSubscriptionPushConfig PushConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#push_config GooglePubsubSubscription#push_config}

---

##### `RetainAckedMessages`<sup>Optional</sup> <a name="RetainAckedMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retainAckedMessages"></a>

```csharp
public object RetainAckedMessages { get; set; }
```

- *Type:* object

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#retain_acked_messages GooglePubsubSubscription#retain_acked_messages}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.retryPolicy"></a>

```csharp
public GooglePubsubSubscriptionRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#retry_policy GooglePubsubSubscription#retry_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionConfig.property.timeouts"></a>

```csharp
public GooglePubsubSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts">GooglePubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#timeouts GooglePubsubSubscription#timeouts}

---

### GooglePubsubSubscriptionDeadLetterPolicy <a name="GooglePubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionDeadLetterPolicy {
    string DeadLetterTopic = null,
    double MaxDeliveryAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>string</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `DeadLetterTopic`<sup>Optional</sup> <a name="DeadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```csharp
public string DeadLetterTopic { get; set; }
```

- *Type:* string

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#dead_letter_topic GooglePubsubSubscription#dead_letter_topic}

---

##### `MaxDeliveryAttempts`<sup>Optional</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; set; }
```

- *Type:* double

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#max_delivery_attempts GooglePubsubSubscription#max_delivery_attempts}

---

### GooglePubsubSubscriptionExpirationPolicy <a name="GooglePubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionExpirationPolicy {
    string Ttl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl">Ttl</a></code> | <code>string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#ttl GooglePubsubSubscription#ttl}

---

### GooglePubsubSubscriptionPushConfig <a name="GooglePubsubSubscriptionPushConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfig {
    string PushEndpoint,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    GooglePubsubSubscriptionPushConfigNoWrapper NoWrapper = null,
    GooglePubsubSubscriptionPushConfigOidcToken OidcToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint">PushEndpoint</a></code> | <code>string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Endpoint configuration attributes. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```csharp
public string PushEndpoint { get; set; }
```

- *Type:* string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#push_endpoint GooglePubsubSubscription#push_endpoint}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#attributes GooglePubsubSubscription#attributes}

---

##### `NoWrapper`<sup>Optional</sup> <a name="NoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.noWrapper"></a>

```csharp
public GooglePubsubSubscriptionPushConfigNoWrapper NoWrapper { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#no_wrapper GooglePubsubSubscription#no_wrapper}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig.property.oidcToken"></a>

```csharp
public GooglePubsubSubscriptionPushConfigOidcToken OidcToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#oidc_token GooglePubsubSubscription#oidc_token}

---

### GooglePubsubSubscriptionPushConfigNoWrapper <a name="GooglePubsubSubscriptionPushConfigNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfigNoWrapper {
    object WriteMetadata
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}

---

### GooglePubsubSubscriptionPushConfigOidcToken <a name="GooglePubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfigOidcToken {
    string ServiceAccountEmail,
    string Audience = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience">Audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#audience GooglePubsubSubscription#audience}

---

### GooglePubsubSubscriptionRetryPolicy <a name="GooglePubsubSubscriptionRetryPolicy" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionRetryPolicy {
    string MaximumBackoff = null,
    string MinimumBackoff = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff">MaximumBackoff</a></code> | <code>string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff">MinimumBackoff</a></code> | <code>string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `MaximumBackoff`<sup>Optional</sup> <a name="MaximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```csharp
public string MaximumBackoff { get; set; }
```

- *Type:* string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#maximum_backoff GooglePubsubSubscription#maximum_backoff}

---

##### `MinimumBackoff`<sup>Optional</sup> <a name="MinimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```csharp
public string MinimumBackoff { get; set; }
```

- *Type:* string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#minimum_backoff GooglePubsubSubscription#minimum_backoff}

---

### GooglePubsubSubscriptionTimeouts <a name="GooglePubsubSubscriptionTimeouts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubSubscriptionBigqueryConfigOutputReference <a name="GooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">ResetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">ResetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDropUnknownFields` <a name="ResetDropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```csharp
private void ResetDropUnknownFields()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetUseTableSchema` <a name="ResetUseTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```csharp
private void ResetUseTableSchema()
```

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```csharp
private void ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```csharp
private void ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">DropUnknownFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">UseTableSchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">DropUnknownFields</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">UseTableSchema</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DropUnknownFieldsInput`<sup>Optional</sup> <a name="DropUnknownFieldsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```csharp
public object DropUnknownFieldsInput { get; }
```

- *Type:* object

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `UseTableSchemaInput`<sup>Optional</sup> <a name="UseTableSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```csharp
public object UseTableSchemaInput { get; }
```

- *Type:* object

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```csharp
public object UseTopicSchemaInput { get; }
```

- *Type:* object

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `DropUnknownFields`<sup>Required</sup> <a name="DropUnknownFields" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```csharp
public object DropUnknownFields { get; }
```

- *Type:* object

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `UseTableSchema`<sup>Required</sup> <a name="UseTableSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```csharp
public object UseTableSchema { get; }
```

- *Type:* object

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionBigqueryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionBigqueryConfig">GooglePubsubSubscriptionBigqueryConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```csharp
private void ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```csharp
private void ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```csharp
public object UseTopicSchemaInput { get; }
```

- *Type:* object

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### GooglePubsubSubscriptionCloudStorageConfigOutputReference <a name="GooglePubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionCloudStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">PutAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">ResetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">ResetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">ResetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">ResetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">ResetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">ResetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroConfig` <a name="PutAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```csharp
private void PutAvroConfig(GooglePubsubSubscriptionCloudStorageConfigAvroConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `ResetAvroConfig` <a name="ResetAvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```csharp
private void ResetAvroConfig()
```

##### `ResetFilenameDatetimeFormat` <a name="ResetFilenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```csharp
private void ResetFilenameDatetimeFormat()
```

##### `ResetFilenamePrefix` <a name="ResetFilenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```csharp
private void ResetFilenamePrefix()
```

##### `ResetFilenameSuffix` <a name="ResetFilenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```csharp
private void ResetFilenameSuffix()
```

##### `ResetMaxBytes` <a name="ResetMaxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```csharp
private void ResetMaxBytes()
```

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```csharp
private void ResetMaxDuration()
```

##### `ResetMaxMessages` <a name="ResetMaxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```csharp
private void ResetMaxMessages()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">AvroConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">FilenameDatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">FilenamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">FilenameSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">MaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">MaxMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">FilenamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">FilenameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">MaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">MaxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">MaxMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvroConfig`<sup>Required</sup> <a name="AvroConfig" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference AvroConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AvroConfigInput`<sup>Optional</sup> <a name="AvroConfigInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfigAvroConfig AvroConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigAvroConfig">GooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FilenameDatetimeFormatInput`<sup>Optional</sup> <a name="FilenameDatetimeFormatInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```csharp
public string FilenameDatetimeFormatInput { get; }
```

- *Type:* string

---

##### `FilenamePrefixInput`<sup>Optional</sup> <a name="FilenamePrefixInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```csharp
public string FilenamePrefixInput { get; }
```

- *Type:* string

---

##### `FilenameSuffixInput`<sup>Optional</sup> <a name="FilenameSuffixInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```csharp
public string FilenameSuffixInput { get; }
```

- *Type:* string

---

##### `MaxBytesInput`<sup>Optional</sup> <a name="MaxBytesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```csharp
public double MaxBytesInput { get; }
```

- *Type:* double

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```csharp
public string MaxDurationInput { get; }
```

- *Type:* string

---

##### `MaxMessagesInput`<sup>Optional</sup> <a name="MaxMessagesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```csharp
public double MaxMessagesInput { get; }
```

- *Type:* double

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `FilenameDatetimeFormat`<sup>Required</sup> <a name="FilenameDatetimeFormat" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```csharp
public string FilenameDatetimeFormat { get; }
```

- *Type:* string

---

##### `FilenamePrefix`<sup>Required</sup> <a name="FilenamePrefix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```csharp
public string FilenamePrefix { get; }
```

- *Type:* string

---

##### `FilenameSuffix`<sup>Required</sup> <a name="FilenameSuffix" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```csharp
public string FilenameSuffix { get; }
```

- *Type:* string

---

##### `MaxBytes`<sup>Required</sup> <a name="MaxBytes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```csharp
public double MaxBytes { get; }
```

- *Type:* double

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```csharp
public string MaxDuration { get; }
```

- *Type:* string

---

##### `MaxMessages`<sup>Required</sup> <a name="MaxMessages" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```csharp
public double MaxMessages { get; }
```

- *Type:* double

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionCloudStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionCloudStorageConfig">GooglePubsubSubscriptionCloudStorageConfig</a>

---


### GooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="GooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">ResetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">ResetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeadLetterTopic` <a name="ResetDeadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```csharp
private void ResetDeadLetterTopic()
```

##### `ResetMaxDeliveryAttempts` <a name="ResetMaxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```csharp
private void ResetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">DeadLetterTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeadLetterTopicInput`<sup>Optional</sup> <a name="DeadLetterTopicInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```csharp
public string DeadLetterTopicInput { get; }
```

- *Type:* string

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```csharp
public double MaxDeliveryAttemptsInput { get; }
```

- *Type:* double

---

##### `DeadLetterTopic`<sup>Required</sup> <a name="DeadLetterTopic" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```csharp
public string DeadLetterTopic { get; }
```

- *Type:* string

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionDeadLetterPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionDeadLetterPolicy">GooglePubsubSubscriptionDeadLetterPolicy</a>

---


### GooglePubsubSubscriptionExpirationPolicyOutputReference <a name="GooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionExpirationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionExpirationPolicy">GooglePubsubSubscriptionExpirationPolicy</a>

---


### GooglePubsubSubscriptionPushConfigNoWrapperOutputReference <a name="GooglePubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfigNoWrapperOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionPushConfigNoWrapper InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---


### GooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="GooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionPushConfigOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---


### GooglePubsubSubscriptionPushConfigOutputReference <a name="GooglePubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionPushConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper">PutNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper">ResetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNoWrapper` <a name="PutNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```csharp
private void PutNoWrapper(GooglePubsubSubscriptionPushConfigNoWrapper Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```csharp
private void PutOidcToken(GooglePubsubSubscriptionPushConfigOidcToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetNoWrapper` <a name="ResetNoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```csharp
private void ResetNoWrapper()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">NoWrapperInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">PushEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">PushEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoWrapper`<sup>Required</sup> <a name="NoWrapper" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```csharp
public GooglePubsubSubscriptionPushConfigNoWrapperOutputReference NoWrapper { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapperOutputReference">GooglePubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```csharp
public GooglePubsubSubscriptionPushConfigOidcTokenOutputReference OidcToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcTokenOutputReference">GooglePubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NoWrapperInput`<sup>Optional</sup> <a name="NoWrapperInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```csharp
public GooglePubsubSubscriptionPushConfigNoWrapper NoWrapperInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigNoWrapper">GooglePubsubSubscriptionPushConfigNoWrapper</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```csharp
public GooglePubsubSubscriptionPushConfigOidcToken OidcTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOidcToken">GooglePubsubSubscriptionPushConfigOidcToken</a>

---

##### `PushEndpointInput`<sup>Optional</sup> <a name="PushEndpointInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```csharp
public string PushEndpointInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```csharp
public string PushEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionPushConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionPushConfig">GooglePubsubSubscriptionPushConfig</a>

---


### GooglePubsubSubscriptionRetryPolicyOutputReference <a name="GooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">ResetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">ResetMinimumBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBackoff` <a name="ResetMaximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```csharp
private void ResetMaximumBackoff()
```

##### `ResetMinimumBackoff` <a name="ResetMinimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```csharp
private void ResetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">MaximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">MinimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBackoffInput`<sup>Optional</sup> <a name="MaximumBackoffInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```csharp
public string MaximumBackoffInput { get; }
```

- *Type:* string

---

##### `MinimumBackoffInput`<sup>Optional</sup> <a name="MinimumBackoffInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```csharp
public string MinimumBackoffInput { get; }
```

- *Type:* string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```csharp
public string MaximumBackoff { get; }
```

- *Type:* string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```csharp
public string MinimumBackoff { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubSubscriptionRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionRetryPolicy">GooglePubsubSubscriptionRetryPolicy</a>

---


### GooglePubsubSubscriptionTimeoutsOutputReference <a name="GooglePubsubSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubSubscription.GooglePubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



