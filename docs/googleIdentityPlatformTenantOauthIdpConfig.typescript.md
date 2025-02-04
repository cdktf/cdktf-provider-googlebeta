# `googleIdentityPlatformTenantOauthIdpConfig` Submodule <a name="`googleIdentityPlatformTenantOauthIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantOauthIdpConfig <a name="GoogleIdentityPlatformTenantOauthIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config google_identity_platform_tenant_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig(scope: Construct, id: string, config: GoogleIdentityPlatformTenantOauthIdpConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig">GoogleIdentityPlatformTenantOauthIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig">GoogleIdentityPlatformTenantOauthIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIdentityPlatformTenantOauthIdpConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenantOauthIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isConstruct"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformElement"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformResource"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenantOauthIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIdentityPlatformTenantOauthIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIdentityPlatformTenantOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenantOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIdentityPlatformTenantOauthIdpConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantOauthIdpConfigConfig <a name="GoogleIdentityPlatformTenantOauthIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantOauthIdpConfigConfig: googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.clientId">clientId</a></code> | <code>string</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.issuer">issuer</a></code> | <code>string</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.name">name</a></code> | <code>string</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.tenant">tenant</a></code> | <code>string</code> | The name of the tenant where this OIDC IDP configuration resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#id GoogleIdentityPlatformTenantOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#project GoogleIdentityPlatformTenantOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#client_id GoogleIdentityPlatformTenantOauthIdpConfig#client_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#display_name GoogleIdentityPlatformTenantOauthIdpConfig#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#issuer GoogleIdentityPlatformTenantOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#name GoogleIdentityPlatformTenantOauthIdpConfig#name}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

The name of the tenant where this OIDC IDP configuration resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#tenant GoogleIdentityPlatformTenantOauthIdpConfig#tenant}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#client_secret GoogleIdentityPlatformTenantOauthIdpConfig#client_secret}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#enabled GoogleIdentityPlatformTenantOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#id GoogleIdentityPlatformTenantOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#project GoogleIdentityPlatformTenantOauthIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformTenantOauthIdpConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#timeouts GoogleIdentityPlatformTenantOauthIdpConfig#timeouts}

---

### GoogleIdentityPlatformTenantOauthIdpConfigTimeouts <a name="GoogleIdentityPlatformTenantOauthIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantOauthIdpConfigTimeouts: googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#create GoogleIdentityPlatformTenantOauthIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#delete GoogleIdentityPlatformTenantOauthIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#update GoogleIdentityPlatformTenantOauthIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#create GoogleIdentityPlatformTenantOauthIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#delete GoogleIdentityPlatformTenantOauthIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_tenant_oauth_idp_config#update GoogleIdentityPlatformTenantOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantOauthIdpConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIdentityPlatformTenantOauthIdpConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantOauthIdpConfig.GoogleIdentityPlatformTenantOauthIdpConfigTimeouts">GoogleIdentityPlatformTenantOauthIdpConfigTimeouts</a>

---



