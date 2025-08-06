# `googleComputeFutureReservation` Submodule <a name="`googleComputeFutureReservation` Submodule" id="@cdktf/provider-google-beta.googleComputeFutureReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFutureReservation <a name="GoogleComputeFutureReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation google_compute_future_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservation(scope: Construct, id: string, config: GoogleComputeFutureReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation">putAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration">putAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo">putCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings">putShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties">putSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation">resetAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime">resetAutoCreatedReservationsDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration">resetAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations">resetAutoDeleteAutoCreatedReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo">resetCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus">resetPlanningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode">resetReservationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName">resetReservationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType">resetSchedulingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings">resetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired">resetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties">resetSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregateReservation` <a name="putAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation"></a>

```typescript
public putAggregateReservation(value: GoogleComputeFutureReservationAggregateReservation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `putAutoCreatedReservationsDuration` <a name="putAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration"></a>

```typescript
public putAutoCreatedReservationsDuration(value: GoogleComputeFutureReservationAutoCreatedReservationsDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `putCommitmentInfo` <a name="putCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo"></a>

```typescript
public putCommitmentInfo(value: GoogleComputeFutureReservationCommitmentInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `putShareSettings` <a name="putShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings"></a>

```typescript
public putShareSettings(value: GoogleComputeFutureReservationShareSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `putSpecificSkuProperties` <a name="putSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties"></a>

```typescript
public putSpecificSkuProperties(value: GoogleComputeFutureReservationSpecificSkuProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeFutureReservationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow"></a>

```typescript
public putTimeWindow(value: GoogleComputeFutureReservationTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `resetAggregateReservation` <a name="resetAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation"></a>

```typescript
public resetAggregateReservation(): void
```

##### `resetAutoCreatedReservationsDeleteTime` <a name="resetAutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime"></a>

```typescript
public resetAutoCreatedReservationsDeleteTime(): void
```

##### `resetAutoCreatedReservationsDuration` <a name="resetAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration"></a>

```typescript
public resetAutoCreatedReservationsDuration(): void
```

##### `resetAutoDeleteAutoCreatedReservations` <a name="resetAutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations"></a>

```typescript
public resetAutoDeleteAutoCreatedReservations(): void
```

##### `resetCommitmentInfo` <a name="resetCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo"></a>

```typescript
public resetCommitmentInfo(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPlanningStatus` <a name="resetPlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus"></a>

```typescript
public resetPlanningStatus(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReservationMode` <a name="resetReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode"></a>

```typescript
public resetReservationMode(): void
```

##### `resetReservationName` <a name="resetReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName"></a>

```typescript
public resetReservationName(): void
```

##### `resetSchedulingType` <a name="resetSchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType"></a>

```typescript
public resetSchedulingType(): void
```

##### `resetShareSettings` <a name="resetShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings"></a>

```typescript
public resetShareSettings(): void
```

##### `resetSpecificReservationRequired` <a name="resetSpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired"></a>

```typescript
public resetSpecificReservationRequired(): void
```

##### `resetSpecificSkuProperties` <a name="resetSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties"></a>

```typescript
public resetSpecificSkuProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeFutureReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeFutureReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeFutureReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation">aggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration">autoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput">aggregateReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput">autoCreatedReservationsDeleteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput">autoCreatedReservationsDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput">autoDeleteAutoCreatedReservationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput">commitmentInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput">planningStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput">reservationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput">reservationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput">schedulingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput">shareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput">specificReservationRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput">specificSkuPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime">autoCreatedReservationsDeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations">autoDeleteAutoCreatedReservations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus">planningStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode">reservationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName">reservationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType">schedulingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired">specificReservationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aggregateReservation`<sup>Required</sup> <a name="aggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation"></a>

```typescript
public readonly aggregateReservation: GoogleComputeFutureReservationAggregateReservationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a>

---

##### `autoCreatedReservationsDuration`<sup>Required</sup> <a name="autoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration"></a>

```typescript
public readonly autoCreatedReservationsDuration: GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a>

---

##### `commitmentInfo`<sup>Required</sup> <a name="commitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo"></a>

```typescript
public readonly commitmentInfo: GoogleComputeFutureReservationCommitmentInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings"></a>

```typescript
public readonly shareSettings: GoogleComputeFutureReservationShareSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a>

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties"></a>

```typescript
public readonly specificSkuProperties: GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status"></a>

```typescript
public readonly status: GoogleComputeFutureReservationStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeFutureReservationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow"></a>

```typescript
public readonly timeWindow: GoogleComputeFutureReservationTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `aggregateReservationInput`<sup>Optional</sup> <a name="aggregateReservationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput"></a>

```typescript
public readonly aggregateReservationInput: GoogleComputeFutureReservationAggregateReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `autoCreatedReservationsDeleteTimeInput`<sup>Optional</sup> <a name="autoCreatedReservationsDeleteTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput"></a>

```typescript
public readonly autoCreatedReservationsDeleteTimeInput: string;
```

- *Type:* string

---

##### `autoCreatedReservationsDurationInput`<sup>Optional</sup> <a name="autoCreatedReservationsDurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput"></a>

```typescript
public readonly autoCreatedReservationsDurationInput: GoogleComputeFutureReservationAutoCreatedReservationsDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `autoDeleteAutoCreatedReservationsInput`<sup>Optional</sup> <a name="autoDeleteAutoCreatedReservationsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput"></a>

```typescript
public readonly autoDeleteAutoCreatedReservationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitmentInfoInput`<sup>Optional</sup> <a name="commitmentInfoInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput"></a>

```typescript
public readonly commitmentInfoInput: GoogleComputeFutureReservationCommitmentInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `planningStatusInput`<sup>Optional</sup> <a name="planningStatusInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput"></a>

```typescript
public readonly planningStatusInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationModeInput`<sup>Optional</sup> <a name="reservationModeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput"></a>

```typescript
public readonly reservationModeInput: string;
```

- *Type:* string

---

##### `reservationNameInput`<sup>Optional</sup> <a name="reservationNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput"></a>

```typescript
public readonly reservationNameInput: string;
```

- *Type:* string

---

##### `schedulingTypeInput`<sup>Optional</sup> <a name="schedulingTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput"></a>

```typescript
public readonly schedulingTypeInput: string;
```

- *Type:* string

---

##### `shareSettingsInput`<sup>Optional</sup> <a name="shareSettingsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput"></a>

```typescript
public readonly shareSettingsInput: GoogleComputeFutureReservationShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `specificReservationRequiredInput`<sup>Optional</sup> <a name="specificReservationRequiredInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput"></a>

```typescript
public readonly specificReservationRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `specificSkuPropertiesInput`<sup>Optional</sup> <a name="specificSkuPropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput"></a>

```typescript
public readonly specificSkuPropertiesInput: GoogleComputeFutureReservationSpecificSkuProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeFutureReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: GoogleComputeFutureReservationTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `autoCreatedReservationsDeleteTime`<sup>Required</sup> <a name="autoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime"></a>

```typescript
public readonly autoCreatedReservationsDeleteTime: string;
```

- *Type:* string

---

##### `autoDeleteAutoCreatedReservations`<sup>Required</sup> <a name="autoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations"></a>

```typescript
public readonly autoDeleteAutoCreatedReservations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `planningStatus`<sup>Required</sup> <a name="planningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus"></a>

```typescript
public readonly planningStatus: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reservationMode`<sup>Required</sup> <a name="reservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode"></a>

```typescript
public readonly reservationMode: string;
```

- *Type:* string

---

##### `reservationName`<sup>Required</sup> <a name="reservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName"></a>

```typescript
public readonly reservationName: string;
```

- *Type:* string

---

##### `schedulingType`<sup>Required</sup> <a name="schedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType"></a>

```typescript
public readonly schedulingType: string;
```

- *Type:* string

---

##### `specificReservationRequired`<sup>Required</sup> <a name="specificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired"></a>

```typescript
public readonly specificReservationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFutureReservationAggregateReservation <a name="GoogleComputeFutureReservationAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationAggregateReservation: googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources">reservedResources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]</code> | reserved_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily">vmFamily</a></code> | <code>string</code> | The VM family that all instances scheduled against this reservation must belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType">workloadType</a></code> | <code>string</code> | The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"]. |

---

##### `reservedResources`<sup>Required</sup> <a name="reservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources"></a>

```typescript
public readonly reservedResources: IResolvable | GoogleComputeFutureReservationAggregateReservationReservedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]

reserved_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reserved_resources GoogleComputeFutureReservation#reserved_resources}

---

##### `vmFamily`<sup>Optional</sup> <a name="vmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily"></a>

```typescript
public readonly vmFamily: string;
```

- *Type:* string

The VM family that all instances scheduled against this reservation must belong to.

Possible values: ["VM_FAMILY_CLOUD_TPU_DEVICE_CT3", "VM_FAMILY_CLOUD_TPU_LITE_DEVICE_CT5L", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT5LP", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT6E", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT3P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT5P"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#vm_family GoogleComputeFutureReservation#vm_family}

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#workload_type GoogleComputeFutureReservation#workload_type}

---

### GoogleComputeFutureReservationAggregateReservationReservedResources <a name="GoogleComputeFutureReservationAggregateReservationReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationAggregateReservationReservedResources: googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator">accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | accelerator block. |

---

##### `accelerator`<sup>Optional</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator"></a>

```typescript
public readonly accelerator: GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator GoogleComputeFutureReservation#accelerator}

---

### GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationAggregateReservationReservedResourcesAccelerator: googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | Number of accelerators of specified type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l". |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

Number of accelerators of specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationAutoCreatedReservationsDuration <a name="GoogleComputeFutureReservationAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationAutoCreatedReservationsDuration: googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds">seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

### GoogleComputeFutureReservationCommitmentInfo <a name="GoogleComputeFutureReservationCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationCommitmentInfo: googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName">commitmentName</a></code> | <code>string</code> | name of the commitment where capacity is being delivered to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | Indicates if a Commitment needs to be created as part of FR delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms">previousCommitmentTerms</a></code> | <code>string</code> | Only applicable if FR is delivering to the same reservation. |

---

##### `commitmentName`<sup>Optional</sup> <a name="commitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName"></a>

```typescript
public readonly commitmentName: string;
```

- *Type:* string

name of the commitment where capacity is being delivered to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_name GoogleComputeFutureReservation#commitment_name}

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

Indicates if a Commitment needs to be created as part of FR delivery.

If this field is not present, then no commitment needs to be created. Possible values: ["INVALID", "THIRTY_SIX_MONTH", "TWELVE_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_plan GoogleComputeFutureReservation#commitment_plan}

---

##### `previousCommitmentTerms`<sup>Optional</sup> <a name="previousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms"></a>

```typescript
public readonly previousCommitmentTerms: string;
```

- *Type:* string

Only applicable if FR is delivering to the same reservation.

If set, all parent commitments will be extended to match the end date of the plan for this commitment. Possible values: ["EXTEND"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#previous_commitment_terms GoogleComputeFutureReservation#previous_commitment_terms}

---

### GoogleComputeFutureReservationConfig <a name="GoogleComputeFutureReservationConfig" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationConfig: googleComputeFutureReservation.GoogleComputeFutureReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation">aggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | aggregate_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime">autoCreatedReservationsDeleteTime</a></code> | <code>string</code> | Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration">autoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | auto_created_reservations_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations">autoDeleteAutoCreatedReservations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting for enabling or disabling automatic deletion for auto-created reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | commitment_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Name prefix for the reservations to be created at the time of delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus">planningStatus</a></code> | <code>string</code> | Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode">reservationMode</a></code> | <code>string</code> | The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName">reservationName</a></code> | <code>string</code> | Name of reservations where the capacity is provisioned at the time of delivery of future reservations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType">schedulingType</a></code> | <code>string</code> | Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired">specificReservationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | specific_sku_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the las
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow"></a>

```typescript
public readonly timeWindow: GoogleComputeFutureReservationTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}

---

##### `aggregateReservation`<sup>Optional</sup> <a name="aggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation"></a>

```typescript
public readonly aggregateReservation: GoogleComputeFutureReservationAggregateReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

aggregate_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#aggregate_reservation GoogleComputeFutureReservation#aggregate_reservation}

---

##### `autoCreatedReservationsDeleteTime`<sup>Optional</sup> <a name="autoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime"></a>

```typescript
public readonly autoCreatedReservationsDeleteTime: string;
```

- *Type:* string

Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}

---

##### `autoCreatedReservationsDuration`<sup>Optional</sup> <a name="autoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration"></a>

```typescript
public readonly autoCreatedReservationsDuration: GoogleComputeFutureReservationAutoCreatedReservationsDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

auto_created_reservations_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}

---

##### `autoDeleteAutoCreatedReservations`<sup>Optional</sup> <a name="autoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations"></a>

```typescript
public readonly autoDeleteAutoCreatedReservations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting for enabling or disabling automatic deletion for auto-created reservation.

If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}

---

##### `commitmentInfo`<sup>Optional</sup> <a name="commitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo"></a>

```typescript
public readonly commitmentInfo: GoogleComputeFutureReservationCommitmentInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

commitment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Name prefix for the reservations to be created at the time of delivery.

The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}

---

##### `planningStatus`<sup>Optional</sup> <a name="planningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus"></a>

```typescript
public readonly planningStatus: string;
```

- *Type:* string

Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}.

---

##### `reservationMode`<sup>Optional</sup> <a name="reservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode"></a>

```typescript
public readonly reservationMode: string;
```

- *Type:* string

The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}

---

##### `reservationName`<sup>Optional</sup> <a name="reservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName"></a>

```typescript
public readonly reservationName: string;
```

- *Type:* string

Name of reservations where the capacity is provisioned at the time of delivery of future reservations.

If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}

---

##### `schedulingType`<sup>Optional</sup> <a name="schedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType"></a>

```typescript
public readonly schedulingType: string;
```

- *Type:* string

Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings"></a>

```typescript
public readonly shareSettings: GoogleComputeFutureReservationShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}

---

##### `specificReservationRequired`<sup>Optional</sup> <a name="specificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired"></a>

```typescript
public readonly specificReservationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation.

If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}

---

##### `specificSkuProperties`<sup>Optional</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties"></a>

```typescript
public readonly specificSkuProperties: GoogleComputeFutureReservationSpecificSkuProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

specific_sku_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeFutureReservationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}

---

### GoogleComputeFutureReservationShareSettings <a name="GoogleComputeFutureReservationShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationShareSettings: googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap">projectMap</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]</code> | project_map block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects">projects</a></code> | <code>string[]</code> | list of Project names to specify consumer projects for this shared-reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType">shareType</a></code> | <code>string</code> | Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `projectMap`<sup>Optional</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap"></a>

```typescript
public readonly projectMap: IResolvable | GoogleComputeFutureReservationShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project_map GoogleComputeFutureReservation#project_map}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

list of Project names to specify consumer projects for this shared-reservation.

This is only valid when shareType's value is SPECIFIC_PROJECTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#projects GoogleComputeFutureReservation#projects}

---

##### `shareType`<sup>Optional</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#share_type GoogleComputeFutureReservation#share_type}

---

### GoogleComputeFutureReservationShareSettingsProjectMap <a name="GoogleComputeFutureReservationShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationShareSettingsProjectMap: googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId">projectId</a></code> | <code>string</code> | The project ID, should be same as the key of this project config in the parent map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project ID, should be same as the key of this project config in the parent map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project_id GoogleComputeFutureReservation#project_id}

---

### GoogleComputeFutureReservationSpecificSkuProperties <a name="GoogleComputeFutureReservationSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationSpecificSkuProperties: googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>string</code> | The instance template that will be used to populate the ReservedInstanceProperties of the future reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount">totalCount</a></code> | <code>string</code> | Total number of instances for which capacity assurance is requested at a future time period. |

---

##### `instanceProperties`<sup>Optional</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties"></a>

```typescript
public readonly instanceProperties: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#instance_properties GoogleComputeFutureReservation#instance_properties}

---

##### `sourceInstanceTemplate`<sup>Optional</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate"></a>

```typescript
public readonly sourceInstanceTemplate: string;
```

- *Type:* string

The instance template that will be used to populate the ReservedInstanceProperties of the future reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#source_instance_template GoogleComputeFutureReservation#source_instance_template}

---

##### `totalCount`<sup>Optional</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount"></a>

```typescript
public readonly totalCount: string;
```

- *Type:* string

Total number of instances for which capacity assurance is requested at a future time period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#total_count GoogleComputeFutureReservation#total_count}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationSpecificSkuPropertiesInstanceProperties: googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators">guestAccelerators</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]</code> | guest_accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds">localSsds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]</code> | local_ssds block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint">locationHint</a></code> | <code>string</code> | An opaque location hint used to place the allocation close to other resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType">machineType</a></code> | <code>string</code> | Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>number</code> | Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | Minimum cpu platform the reservation. |

---

##### `guestAccelerators`<sup>Optional</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators"></a>

```typescript
public readonly guestAccelerators: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#guest_accelerators GoogleComputeFutureReservation#guest_accelerators}

---

##### `localSsds`<sup>Optional</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds"></a>

```typescript
public readonly localSsds: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#local_ssds GoogleComputeFutureReservation#local_ssds}

---

##### `locationHint`<sup>Optional</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint"></a>

```typescript
public readonly locationHint: string;
```

- *Type:* string

An opaque location hint used to place the allocation close to other resources.

This field is for use by internal tools that use the public API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#location_hint GoogleComputeFutureReservation#location_hint}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory.

This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#machine_type GoogleComputeFutureReservation#machine_type}

---

##### `maintenanceFreezeDurationHours`<sup>Optional</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours"></a>

```typescript
public readonly maintenanceFreezeDurationHours: number;
```

- *Type:* number

Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#maintenance_freeze_duration_hours GoogleComputeFutureReservation#maintenance_freeze_duration_hours}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#maintenance_interval GoogleComputeFutureReservation#maintenance_interval}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

Minimum cpu platform the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#min_cpu_platform GoogleComputeFutureReservation#min_cpu_platform}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators: googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | Full or partial URL of the accelerator type resource to attach to this instance. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

Full or partial URL of the accelerator type resource to attach to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds: googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface">interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#disk_size_gb GoogleComputeFutureReservation#disk_size_gb}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Possible values: ["SCSI", "NVME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#interface GoogleComputeFutureReservation#interface}

---

### GoogleComputeFutureReservationStatus <a name="GoogleComputeFutureReservationStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatus: googleComputeFutureReservation.GoogleComputeFutureReservationStatus = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodState <a name="GoogleComputeFutureReservationStatusLastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodState: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow = { ... }
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration: googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration = { ... }
```


### GoogleComputeFutureReservationStatusSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationStatusSpecificSkuProperties: googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties = { ... }
```


### GoogleComputeFutureReservationTimeouts <a name="GoogleComputeFutureReservationTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationTimeouts: googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}.

---

### GoogleComputeFutureReservationTimeWindow <a name="GoogleComputeFutureReservationTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationTimeWindow: googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime">startTime</a></code> | <code>string</code> | Start time of the future reservation in RFC3339 format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime">endTime</a></code> | <code>string</code> | End time of the future reservation in RFC3339 format. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#start_time GoogleComputeFutureReservation#start_time}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration"></a>

```typescript
public readonly duration: GoogleComputeFutureReservationTimeWindowDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#duration GoogleComputeFutureReservation#duration}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

End time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#end_time GoogleComputeFutureReservation#end_time}

---

### GoogleComputeFutureReservationTimeWindowDuration <a name="GoogleComputeFutureReservationTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

const googleComputeFutureReservationTimeWindowDuration: googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds">seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFutureReservationAggregateReservationOutputReference <a name="GoogleComputeFutureReservationAggregateReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources">putReservedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily">resetVmFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReservedResources` <a name="putReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources"></a>

```typescript
public putReservedResources(value: IResolvable | GoogleComputeFutureReservationAggregateReservationReservedResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]

---

##### `resetVmFamily` <a name="resetVmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily"></a>

```typescript
public resetVmFamily(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources">reservedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput">reservedResourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput">vmFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily">vmFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reservedResources`<sup>Required</sup> <a name="reservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources"></a>

```typescript
public readonly reservedResources: GoogleComputeFutureReservationAggregateReservationReservedResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a>

---

##### `reservedResourcesInput`<sup>Optional</sup> <a name="reservedResourcesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput"></a>

```typescript
public readonly reservedResourcesInput: IResolvable | GoogleComputeFutureReservationAggregateReservationReservedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]

---

##### `vmFamilyInput`<sup>Optional</sup> <a name="vmFamilyInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput"></a>

```typescript
public readonly vmFamilyInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `vmFamily`<sup>Required</sup> <a name="vmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily"></a>

```typescript
public readonly vmFamily: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationAggregateReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount"></a>

```typescript
public resetAcceleratorCount(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput"></a>

```typescript
public readonly acceleratorCountInput: number;
```

- *Type:* number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesList <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationAggregateReservationReservedResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>[]

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator">putAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator">resetAccelerator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerator` <a name="putAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator"></a>

```typescript
public putAccelerator(value: GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `resetAccelerator` <a name="resetAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator"></a>

```typescript
public resetAccelerator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator">accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput">acceleratorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator"></a>

```typescript
public readonly accelerator: GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a>

---

##### `acceleratorInput`<sup>Optional</sup> <a name="acceleratorInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput"></a>

```typescript
public readonly acceleratorInput: GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationAggregateReservationReservedResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources">GoogleComputeFutureReservationAggregateReservationReservedResources</a>

---


### GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference <a name="GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationAutoCreatedReservationsDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---


### GoogleComputeFutureReservationCommitmentInfoOutputReference <a name="GoogleComputeFutureReservationCommitmentInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName">resetCommitmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms">resetPreviousCommitmentTerms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitmentName` <a name="resetCommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName"></a>

```typescript
public resetCommitmentName(): void
```

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan"></a>

```typescript
public resetCommitmentPlan(): void
```

##### `resetPreviousCommitmentTerms` <a name="resetPreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms"></a>

```typescript
public resetPreviousCommitmentTerms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput">commitmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput">previousCommitmentTermsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName">commitmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms">previousCommitmentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentNameInput`<sup>Optional</sup> <a name="commitmentNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput"></a>

```typescript
public readonly commitmentNameInput: string;
```

- *Type:* string

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput"></a>

```typescript
public readonly commitmentPlanInput: string;
```

- *Type:* string

---

##### `previousCommitmentTermsInput`<sup>Optional</sup> <a name="previousCommitmentTermsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput"></a>

```typescript
public readonly previousCommitmentTermsInput: string;
```

- *Type:* string

---

##### `commitmentName`<sup>Required</sup> <a name="commitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName"></a>

```typescript
public readonly commitmentName: string;
```

- *Type:* string

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

---

##### `previousCommitmentTerms`<sup>Required</sup> <a name="previousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms"></a>

```typescript
public readonly previousCommitmentTerms: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationCommitmentInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---


### GoogleComputeFutureReservationShareSettingsOutputReference <a name="GoogleComputeFutureReservationShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap">putProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap">resetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects">resetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType">resetShareType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProjectMap` <a name="putProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap"></a>

```typescript
public putProjectMap(value: IResolvable | GoogleComputeFutureReservationShareSettingsProjectMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]

---

##### `resetProjectMap` <a name="resetProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap"></a>

```typescript
public resetProjectMap(): void
```

##### `resetProjects` <a name="resetProjects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```

##### `resetShareType` <a name="resetShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType"></a>

```typescript
public resetShareType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput">projectMapInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap"></a>

```typescript
public readonly projectMap: GoogleComputeFutureReservationShareSettingsProjectMapList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a>

---

##### `projectMapInput`<sup>Optional</sup> <a name="projectMapInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput"></a>

```typescript
public readonly projectMapInput: IResolvable | GoogleComputeFutureReservationShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```typescript
public readonly shareTypeInput: string;
```

- *Type:* string

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---


### GoogleComputeFutureReservationShareSettingsProjectMapList <a name="GoogleComputeFutureReservationShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>[]

---


### GoogleComputeFutureReservationShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationShareSettingsProjectMap;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap">GoogleComputeFutureReservationShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount"></a>

```typescript
public resetAcceleratorCount(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```typescript
public readonly acceleratorCountInput: number;
```

- *Type:* number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface">resetInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators">putGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds">putLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators">resetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds">resetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint">resetLocationHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours">resetMaintenanceFreezeDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuestAccelerators` <a name="putGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators"></a>

```typescript
public putGuestAccelerators(value: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]

---

##### `putLocalSsds` <a name="putLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds"></a>

```typescript
public putLocalSsds(value: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]

---

##### `resetGuestAccelerators` <a name="resetGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```typescript
public resetGuestAccelerators(): void
```

##### `resetLocalSsds` <a name="resetLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds"></a>

```typescript
public resetLocalSsds(): void
```

##### `resetLocationHint` <a name="resetLocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint"></a>

```typescript
public resetLocationHint(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaintenanceFreezeDurationHours` <a name="resetMaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours"></a>

```typescript
public resetMaintenanceFreezeDurationHours(): void
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval"></a>

```typescript
public resetMaintenanceInterval(): void
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```typescript
public resetMinCpuPlatform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">guestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">localSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput">guestAcceleratorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput">localSsdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput">locationHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput">maintenanceFreezeDurationHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">locationHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guestAccelerators`<sup>Required</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```typescript
public readonly guestAccelerators: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `localSsds`<sup>Required</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```typescript
public readonly localSsds: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `guestAcceleratorsInput`<sup>Optional</sup> <a name="guestAcceleratorsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```typescript
public readonly guestAcceleratorsInput: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>[]

---

##### `localSsdsInput`<sup>Optional</sup> <a name="localSsdsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput"></a>

```typescript
public readonly localSsdsInput: IResolvable | GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds</a>[]

---

##### `locationHintInput`<sup>Optional</sup> <a name="locationHintInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput"></a>

```typescript
public readonly locationHintInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maintenanceFreezeDurationHoursInput`<sup>Optional</sup> <a name="maintenanceFreezeDurationHoursInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput"></a>

```typescript
public readonly maintenanceFreezeDurationHoursInput: number;
```

- *Type:* number

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput"></a>

```typescript
public readonly maintenanceIntervalInput: string;
```

- *Type:* string

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```typescript
public readonly minCpuPlatformInput: string;
```

- *Type:* string

---

##### `locationHint`<sup>Required</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```typescript
public readonly locationHint: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maintenanceFreezeDurationHours`<sup>Required</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```typescript
public readonly maintenanceFreezeDurationHours: number;
```

- *Type:* number

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties">putInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties">resetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate">resetSourceInstanceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount">resetTotalCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceProperties` <a name="putInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties"></a>

```typescript
public putInstanceProperties(value: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `resetInstanceProperties` <a name="resetInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties"></a>

```typescript
public resetInstanceProperties(): void
```

##### `resetSourceInstanceTemplate` <a name="resetSourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate"></a>

```typescript
public resetSourceInstanceTemplate(): void
```

##### `resetTotalCount` <a name="resetTotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount"></a>

```typescript
public resetTotalCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput">instancePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput">sourceInstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput">totalCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount">totalCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceProperties`<sup>Required</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```typescript
public readonly instanceProperties: GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a>

---

##### `instancePropertiesInput`<sup>Optional</sup> <a name="instancePropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput"></a>

```typescript
public readonly instancePropertiesInput: GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `sourceInstanceTemplateInput`<sup>Optional</sup> <a name="sourceInstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput"></a>

```typescript
public readonly sourceInstanceTemplateInput: string;
```

- *Type:* string

---

##### `totalCountInput`<sup>Optional</sup> <a name="totalCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput"></a>

```typescript
public readonly totalCountInput: string;
```

- *Type:* string

---

##### `sourceInstanceTemplate`<sup>Required</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```typescript
public readonly sourceInstanceTemplate: string;
```

- *Type:* string

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```typescript
public readonly totalCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationSpecificSkuProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp">timeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `timeStamp`<sup>Required</sup> <a name="timeStamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp"></a>

```typescript
public readonly timeStamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings"></a>

```typescript
public readonly shareSettings: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a>

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties"></a>

```typescript
public readonly specificSkuProperties: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap"></a>

```typescript
public readonly projectMap: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a>

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">guestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">localSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">locationHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">maintenanceFreezeDurationHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guestAccelerators`<sup>Required</sup> <a name="guestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```typescript
public readonly guestAccelerators: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `localSsds`<sup>Required</sup> <a name="localSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```typescript
public readonly localSsds: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `locationHint`<sup>Required</sup> <a name="locationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```typescript
public readonly locationHint: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maintenanceFreezeDurationHours`<sup>Required</sup> <a name="maintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```typescript
public readonly maintenanceFreezeDurationHours: number;
```

- *Type:* number

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount">totalCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceProperties`<sup>Required</sup> <a name="instanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```typescript
public readonly instanceProperties: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a>

---

##### `sourceInstanceTemplate`<sup>Required</sup> <a name="sourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```typescript
public readonly sourceInstanceTemplate: string;
```

- *Type:* string

---

##### `totalCount`<sup>Required</sup> <a name="totalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```typescript
public readonly totalCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo">existingMatchingUsageInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs">futureReservationSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime">lockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus">procurementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `existingMatchingUsageInfo`<sup>Required</sup> <a name="existingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo"></a>

```typescript
public readonly existingMatchingUsageInfo: GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a>

---

##### `futureReservationSpecs`<sup>Required</sup> <a name="futureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs"></a>

```typescript
public readonly futureReservationSpecs: GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a>

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime"></a>

```typescript
public readonly lockTime: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `procurementStatus`<sup>Required</sup> <a name="procurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus"></a>

```typescript
public readonly procurementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusLastKnownGoodState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a>

---


### GoogleComputeFutureReservationStatusList <a name="GoogleComputeFutureReservationStatusList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusOutputReference <a name="GoogleComputeFutureReservationStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus">amendmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations">autoCreatedReservations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount">fulfilledCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState">lastKnownGoodState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime">lockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus">procurementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties">specificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amendmentStatus`<sup>Required</sup> <a name="amendmentStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus"></a>

```typescript
public readonly amendmentStatus: string;
```

- *Type:* string

---

##### `autoCreatedReservations`<sup>Required</sup> <a name="autoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations"></a>

```typescript
public readonly autoCreatedReservations: string[];
```

- *Type:* string[]

---

##### `fulfilledCount`<sup>Required</sup> <a name="fulfilledCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount"></a>

```typescript
public readonly fulfilledCount: string;
```

- *Type:* string

---

##### `lastKnownGoodState`<sup>Required</sup> <a name="lastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState"></a>

```typescript
public readonly lastKnownGoodState: GoogleComputeFutureReservationStatusLastKnownGoodStateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a>

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime"></a>

```typescript
public readonly lockTime: string;
```

- *Type:* string

---

##### `procurementStatus`<sup>Required</sup> <a name="procurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus"></a>

```typescript
public readonly procurementStatus: string;
```

- *Type:* string

---

##### `specificSkuProperties`<sup>Required</sup> <a name="specificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties"></a>

```typescript
public readonly specificSkuProperties: GoogleComputeFutureReservationStatusSpecificSkuPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a>

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get"></a>

```typescript
public get(index: number): GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId">sourceInstanceTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInstanceTemplateId`<sup>Required</sup> <a name="sourceInstanceTemplateId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId"></a>

```typescript
public readonly sourceInstanceTemplateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationStatusSpecificSkuProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationTimeoutsOutputReference <a name="GoogleComputeFutureReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFutureReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---


### GoogleComputeFutureReservationTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationTimeWindowDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---


### GoogleComputeFutureReservationTimeWindowOutputReference <a name="GoogleComputeFutureReservationTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer"></a>

```typescript
import { googleComputeFutureReservation } from '@cdktf/provider-google-beta'

new googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration"></a>

```typescript
public putDuration(value: GoogleComputeFutureReservationTimeWindowDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: GoogleComputeFutureReservationTimeWindowDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: GoogleComputeFutureReservationTimeWindowDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFutureReservationTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---



