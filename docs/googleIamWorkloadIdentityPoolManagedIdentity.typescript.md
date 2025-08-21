# `googleIamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`googleIamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentity <a name="GoogleIamWorkloadIdentityPoolManagedIdentity" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolManagedIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules">putAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">resetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestationRules` <a name="putAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```typescript
public putAttestationRules(value: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `resetAttestationRules` <a name="resetAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```typescript
public resetAttestationRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolManagedIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules">attestationRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">attestationRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">workloadIdentityPoolManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">workloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">workloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestationRules`<sup>Required</sup> <a name="attestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```typescript
public readonly attestationRules: GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `attestationRulesInput`<sup>Optional</sup> <a name="attestationRulesInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```typescript
public readonly attestationRulesInput: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolManagedIdentityIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolManagedIdentityIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolNamespaceIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```typescript
public readonly workloadIdentityPoolNamespaceIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="workloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

const googleIamWorkloadIdentityPoolManagedIdentityAttestationRules: googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#google_cloud_resource GoogleIamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityConfig <a name="GoogleIamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

const googleIamWorkloadIdentityPoolManagedIdentityConfig: googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">workloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">attestationRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | attestation_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description">description</a></code> | <code>string</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `workloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="workloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityId: string;
```

- *Type:* string

The ID to use for the managed identity.

This value must:
* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character


The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

The ID to use for the namespace.

This value must:
* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character


The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `attestationRules`<sup>Optional</sup> <a name="attestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```typescript
public readonly attestationRules: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#attestation_rules GoogleIamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#description GoogleIamWorkloadIdentityPoolManagedIdentity#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#disabled GoogleIamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#timeouts GoogleIamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

const googleIamWorkloadIdentityPoolManagedIdentityTimeouts: googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```typescript
public get(index: number): GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---


### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">googleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleCloudResourceInput`<sup>Optional</sup> <a name="googleCloudResourceInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```typescript
public readonly googleCloudResourceInput: string;
```

- *Type:* string

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules</a>

---


### GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolManagedIdentity } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---



