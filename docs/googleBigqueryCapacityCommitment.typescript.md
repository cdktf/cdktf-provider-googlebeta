# `googleBigqueryCapacityCommitment` Submodule <a name="`googleBigqueryCapacityCommitment` Submodule" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryCapacityCommitment <a name="GoogleBigqueryCapacityCommitment" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

new googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment(scope: Construct, id: string, config: GoogleBigqueryCapacityCommitmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig">GoogleBigqueryCapacityCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig">GoogleBigqueryCapacityCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetCapacityCommitmentId">resetCapacityCommitmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">resetEnforceSingleAdminProjectPerOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetRenewalPlan">resetRenewalPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryCapacityCommitmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---

##### `resetCapacityCommitmentId` <a name="resetCapacityCommitmentId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```typescript
public resetCapacityCommitmentId(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEnforceSingleAdminProjectPerOrg` <a name="resetEnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```typescript
public resetEnforceSingleAdminProjectPerOrg(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRenewalPlan` <a name="resetRenewalPlan" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetRenewalPlan"></a>

```typescript
public resetRenewalPlan(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryCapacityCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentEndTime">commitmentEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentStartTime">commitmentStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference">GoogleBigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentIdInput">capacityCommitmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">enforceSingleAdminProjectPerOrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlanInput">renewalPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCountInput">slotCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlan">renewalPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCount">slotCount</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitmentEndTime`<sup>Required</sup> <a name="commitmentEndTime" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentEndTime"></a>

```typescript
public readonly commitmentEndTime: string;
```

- *Type:* string

---

##### `commitmentStartTime`<sup>Required</sup> <a name="commitmentStartTime" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentStartTime"></a>

```typescript
public readonly commitmentStartTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryCapacityCommitmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference">GoogleBigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `capacityCommitmentIdInput`<sup>Optional</sup> <a name="capacityCommitmentIdInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```typescript
public readonly capacityCommitmentIdInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `enforceSingleAdminProjectPerOrgInput`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrgInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrgInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `renewalPlanInput`<sup>Optional</sup> <a name="renewalPlanInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlanInput"></a>

```typescript
public readonly renewalPlanInput: string;
```

- *Type:* string

---

##### `slotCountInput`<sup>Optional</sup> <a name="slotCountInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCountInput"></a>

```typescript
public readonly slotCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryCapacityCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---

##### `capacityCommitmentId`<sup>Required</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```typescript
public readonly capacityCommitmentId: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enforceSingleAdminProjectPerOrg`<sup>Required</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrg: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `renewalPlan`<sup>Required</sup> <a name="renewalPlan" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlan"></a>

```typescript
public readonly renewalPlan: string;
```

- *Type:* string

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCount"></a>

```typescript
public readonly slotCount: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryCapacityCommitmentConfig <a name="GoogleBigqueryCapacityCommitmentConfig" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.Initializer"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

const googleBigqueryCapacityCommitmentConfig: googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.plan">plan</a></code> | <code>string</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.slotCount">slotCount</a></code> | <code>number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>string</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.edition">edition</a></code> | <code>string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.renewalPlan">renewalPlan</a></code> | <code>string</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#plan GoogleBigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.slotCount"></a>

```typescript
public readonly slotCount: number;
```

- *Type:* number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#slot_count GoogleBigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```typescript
public readonly capacityCommitmentId: string;
```

- *Type:* string

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#capacity_commitment_id GoogleBigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#edition GoogleBigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrg: string;
```

- *Type:* string

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#enforce_single_admin_project_per_org GoogleBigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#location GoogleBigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```typescript
public readonly renewalPlan: string;
```

- *Type:* string

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#renewal_plan GoogleBigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryCapacityCommitmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#timeouts GoogleBigqueryCapacityCommitment#timeouts}

---

### GoogleBigqueryCapacityCommitmentTimeouts <a name="GoogleBigqueryCapacityCommitmentTimeouts" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.Initializer"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

const googleBigqueryCapacityCommitmentTimeouts: googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#create GoogleBigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#delete GoogleBigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#update GoogleBigqueryCapacityCommitment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#create GoogleBigqueryCapacityCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#delete GoogleBigqueryCapacityCommitment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_capacity_commitment#update GoogleBigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryCapacityCommitmentTimeoutsOutputReference <a name="GoogleBigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryCapacityCommitment } from '@cdktf/provider-google-beta'

new googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryCapacityCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---



