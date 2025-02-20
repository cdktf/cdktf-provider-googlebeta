# `googleGkeHubScopeRbacRoleBinding` Submodule <a name="`googleGkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubScopeRbacRoleBinding <a name="GoogleGkeHubScopeRbacRoleBinding" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

new googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding(scope: Construct, id: string, config: GoogleGkeHubScopeRbacRoleBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig">GoogleGkeHubScopeRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig">GoogleGkeHubScopeRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole">putRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRole` <a name="putRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole"></a>

```typescript
public putRole(value: GoogleGkeHubScopeRbacRoleBindingRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeHubScopeRbacRoleBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubScopeRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput">roleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">scopeRbacRoleBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role"></a>

```typescript
public readonly role: GoogleGkeHubScopeRbacRoleBindingRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state"></a>

```typescript
public readonly state: GoogleGkeHubScopeRbacRoleBindingStateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput"></a>

```typescript
public readonly roleInput: GoogleGkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `scopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="scopeRbacRoleBindingIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```typescript
public readonly scopeRbacRoleBindingIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```typescript
public readonly scopeRbacRoleBindingId: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubScopeRbacRoleBindingConfig <a name="GoogleGkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

const googleGkeHubScopeRbacRoleBindingConfig: googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId">scopeId</a></code> | <code>string</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group">group</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user">user</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role"></a>

```typescript
public readonly role: GoogleGkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#role GoogleGkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_id GoogleGkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```typescript
public readonly scopeRbacRoleBindingId: string;
```

- *Type:* string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GoogleGkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#group GoogleGkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#labels GoogleGkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#timeouts GoogleGkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#user GoogleGkeHubScopeRbacRoleBinding#user}

---

### GoogleGkeHubScopeRbacRoleBindingRole <a name="GoogleGkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

const googleGkeHubScopeRbacRoleBindingRole: googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole">predefinedRole</a></code> | <code>string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `predefinedRole`<sup>Optional</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```typescript
public readonly predefinedRole: string;
```

- *Type:* string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#predefined_role GoogleGkeHubScopeRbacRoleBinding#predefined_role}

---

### GoogleGkeHubScopeRbacRoleBindingState <a name="GoogleGkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

const googleGkeHubScopeRbacRoleBindingState: googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState = { ... }
```


### GoogleGkeHubScopeRbacRoleBindingTimeouts <a name="GoogleGkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

const googleGkeHubScopeRbacRoleBindingTimeouts: googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubScopeRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

new googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">resetPredefinedRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedRole` <a name="resetPredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```typescript
public resetPredefinedRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefinedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">predefinedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedRoleInput`<sup>Optional</sup> <a name="predefinedRoleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```typescript
public readonly predefinedRoleInput: string;
```

- *Type:* string

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```typescript
public readonly predefinedRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubScopeRbacRoleBindingRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---


### GoogleGkeHubScopeRbacRoleBindingStateList <a name="GoogleGkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

new googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get"></a>

```typescript
public get(index: number): GoogleGkeHubScopeRbacRoleBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeHubScopeRbacRoleBindingStateOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

new googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubScopeRbacRoleBindingState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a>

---


### GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubScopeRbacRoleBinding } from '@cdktf/provider-google-beta'

new googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubScopeRbacRoleBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---



